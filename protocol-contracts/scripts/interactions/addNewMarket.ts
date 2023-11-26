import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  
  for(let i in datas.dataFeed) {
    const c = await ethers.getContractFactory("PerpHub");

    const contract = PerpHub__factory.connect(contractAddress, c.runner);
    const t = await contract.addSupportedMarket(datas.dataFeed[i].name, datas.dataFeed[i].aggregrator);
    const e = await t.wait()
    console.log(e?.hash);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
