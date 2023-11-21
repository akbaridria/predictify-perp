import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  const rpc = datas.rpc;

  const contract = IAggregator__factory.connect(value, new ethers.JsonRpcProvider(rpc));
  const res = await contract.queryFilter(contract.getEvent("AnswerUpdated"), 138578541 - 20, 138578541)
  console.log(res[1]);

//   const EthDater = require('ethereum-block-by-date');
//   const provider = new ethers.JsonRpcProvider(rpc);
//   const dater = new EthDater(
//     provider
//   )
//   let block = await dater.getDate(
//     new Date(1700159431 * 1000), 
//     true, 
//     false 
//   );
//   console.log(block);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
