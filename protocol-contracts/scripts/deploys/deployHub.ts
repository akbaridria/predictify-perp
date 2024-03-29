import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'

async function main() {
  const dummyUsdt = datas.usdtContract;
  const contractHub = await ethers.deployContract("PerpHub", [dummyUsdt]);
  const e = await contractHub.waitForDeployment();
  console.log(e.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
