import { ethers } from "hardhat";

async function main() {
  const contractHub = await ethers.deployContract("DummyUSDT", [])
  const e = await contractHub.waitForDeployment()
  console.log(e.target)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
