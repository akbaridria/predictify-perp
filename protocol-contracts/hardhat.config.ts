import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    "klaytn-testnet": {
      url: 'https://public-en-baobab.klaytn.net',
      accounts: [process.env.PRIVATE_KEY as string, process.env.PRIVATE_KEY2 as string],
      chainId: 1001,
    }
  }
};

export default config;
