import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  
  const c = await ethers.getContractFactory("PerpHub");

  const contract = PerpHub__factory.connect(contractAddress, c.runner);

  const e = await contract.claim(319648, 1, { gasLimit: 1000000});
  await e.wait();
  console.log(e.hash);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
