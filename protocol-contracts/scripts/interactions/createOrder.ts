import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;
  
  const c = await ethers.getContractFactory("PerpHub");

  const contract = PerpHub__factory.connect(contractAddress, c.runner);

  const endFix = "000000000000000000"
  const d = BigInt("100" + endFix);
  const f = BigInt("10" + endFix );
  const t = await contract.createOrder(d, f , key, Math.floor(Date.now() / 1000) + 5 * 60, 0, { gasLimit: 1000000})
  const e = await t.wait()
  console.log(e?.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
