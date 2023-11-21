import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'

async function main() {
  const contractHub = await ethers.deployContract("PerpHub", [])
  const e = await contractHub.waitForDeployment()
  console.log(e.target)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
