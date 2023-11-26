import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { DummyUSDT__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.usdtContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  
  const c = await ethers.getContractFactory("DummyUSDT");

  const contract = DummyUSDT__factory.connect(contractAddress, c.runner);
  const endFix = "000000000000000000"
  const e = await contract.approve(datas.hubContract, BigInt("1" + endFix))
  await e.wait()
  console.log(e.hash)
  // const endFix = "000000000000000000"
  // const d = BigInt("100" + endFix);
  // const f = BigInt("15" + endFix );
  // const t = await contract.createOrder(d, f , key, Math.floor(Date.now() / 1000) + 5 * 60, 0, { gasLimit: 1000000})
  // const e = await t.wait()
  // console.log(e?.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
