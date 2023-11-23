import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  
  const c = await ethers.getContractFactory("PerpHub");

  const contract = PerpHub__factory.connect(contractAddress, c.runner);

  const e = await contract.orders(1)
  console.log(e, await contract.totalCurrentTrade());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
