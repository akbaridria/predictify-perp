import { ethers } from "hardhat";
import datas from '../../datas/contracts.json'
import { IAggregator__factory, PerpHub__factory } from "../../typechain-types";

async function main() {
  const contractAddress = datas.hubContract;
  const key = datas.dataFeed[0].name;
  const value = datas.dataFeed[0].aggregrator;

  const contract = IAggregator__factory.connect(contractAddress, new ethers.JsonRpcProvider(datas.rpc));

  const e = await contract.getRoundData(319395)
  console.log(e, 892205000n);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
