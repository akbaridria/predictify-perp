import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  const rpc = datas.rpc;

  

  const EthDater = require('ethereum-block-by-date');
  const provider = new ethers.JsonRpcProvider(rpc);
  const dater = new EthDater(
    provider
  )
  let block = await dater.getDate(
    new Date(1700732363 * 1000), 
    true, 
    false 
  );
  console.log(block.block);

  const contract = IAggregator__factory.connect(value, new ethers.JsonRpcProvider(rpc));
  const res = await contract.queryFilter(contract.getEvent("AnswerUpdated"), block.block - 50, block.block)
  console.log(res[res.length -1].args);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
