import { PerpHub__factory } from "../../typechain-types";
import datas from '../../datas/contracts.json';
import { ethers } from "hardhat";

async function main() {
  const c = await ethers.getContractFactory("PerpHub");
  const contract = PerpHub__factory.connect(datas.hubContract, c.runner );
  const res = await contract.queryFilter(contract.getEvent("MarketAdded"), 139425527, 'latest');
  for(let i in res) {
    console.log(res[i].args)
  }
}

main()