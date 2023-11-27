import { IAggregator__factory, PerpHub__factory } from '../../protocol-contracts/typechain-types/'
import datas from '../../protocol-contracts/datas/contracts.json'
import { ethers } from 'ethers'
import { AreaData, Time, UTCTimestamp, WhitespaceData } from 'lightweight-charts';
import { } from 'wagmi'

export const getChartData = async (pair: string) => {
  const aggregratorAddress = datas.dataFeed.filter((item) => item.name === pair);
  let data: (AreaData<Time> | WhitespaceData<Time>)[] = []
  let maxPrice = 0;
  let minPriced = Number.MAX_SAFE_INTEGER;
  let changePercentage = 0;
  
  if(aggregratorAddress.length > 0) {
    const provider = new ethers.JsonRpcProvider(datas.rpc)
    const contract = IAggregator__factory.connect(aggregratorAddress[0].aggregrator, provider );
    const latestBlockNumber = await provider.getBlockNumber();
    const decimal = await contract.decimals();
    const res = await contract.queryFilter(contract.getEvent("AnswerUpdated"), latestBlockNumber - 4000, latestBlockNumber )

    data = res.map((item) => {
      const time = Number(item.args[2]) as UTCTimestamp
      const value = Number(item.args[0]) / (10 ** Number(decimal))
      if(value > maxPrice) {
        maxPrice = value;
      }

      if(value < minPriced) {
        minPriced = value;
      }

      return {
        time: time,
        value: value
      }
    })
  }
  //@ts-ignore
  changePercentage = (data[data.length - 1].value - data[0].value) / 100

  return {
    data: data,
    maxPrice,
    minPriced,
    changePercentage
  };
}

export interface Position {
  symbol: string
  size: number
  entryPrice: number,
  finalPrice: number | undefined,
  direction: number
  endData: number
  roundId: number
  status: number
  oracleRoundId: number | undefined
}
export const getUserPositions = async (walletAddr: string) => {
    console.log(walletAddr)
    const provider = new ethers.JsonRpcProvider(datas.rpc)
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY as string);
    const signer = wallet.connect(provider);
    const contract = PerpHub__factory.connect(datas.hubContract, signer );
    const eventFilter = contract.filters['CreateOrder(address,uint256,string,uint256,uint256)'](walletAddr, undefined, undefined, undefined, undefined);
    const res = await contract.queryFilter(eventFilter, 139425527, 'latest');
    let result = []

    const EthDater = require('ethereum-block-by-date');
    const dater = new EthDater(
      provider
    )

    for(let i in res) {
      const data = res[i].args

      const now = Math.floor(Date.now() / 1000);

      const d = await contract.orders(data.rounId)
      const aggregratorAddress = datas.dataFeed.filter((item) => item.name === data.betOn);
      const oracle = IAggregator__factory.connect(aggregratorAddress[0].aggregrator, provider );
      const decimal = await oracle.decimals()
      let answer = undefined;
      let oracleRoundId = undefined;

      if(now > Number(data.time)) {
        let block = await dater.getDate(
          new Date(Number(data.time) * 1000), 
          true, 
          false 
        );

        const re = await oracle.queryFilter(oracle.getEvent("AnswerUpdated"), block.block - 50, block.block)
        oracleRoundId = re[re.length -1].args[1]
        const e = await oracle.getRoundData(oracleRoundId);
        answer = Number(e.answer);
        if(d.status === BigInt(0)) {
          try {
            await contract.resolveRound([oracleRoundId], [data.rounId])
          } catch (error) {
            console.log("error")
          }
        }
      }
      let temp: Position = {
        symbol: data.betOn,
        size: Number(data.betAmount) / (10 ** 18),
        entryPrice: Number(d.price) / (10 ** Number(decimal)),
        finalPrice: !!answer ? answer / (10 ** Number(decimal)) : answer,
        direction: Number(d.direction),
        endData: Number(data.time),
        roundId: Number(data.rounId),
        status: Number(d.status),
        oracleRoundId: !!oracleRoundId ? Number(oracleRoundId) : undefined
      }

      result.push(temp);
    }
    return result;
}