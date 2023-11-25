import { IAggregator__factory } from '../../protocol-contracts/typechain-types/'
import datas from '../../protocol-contracts/datas/contracts.json'
import { ethers } from 'ethers'
import { AreaData, Time, UTCTimestamp, WhitespaceData } from 'lightweight-charts';


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
  
  changePercentage = (data[data.length - 1].value - data[0].value) / 100

  return {
    data: data,
    maxPrice,
    minPriced,
    changePercentage
  };
}