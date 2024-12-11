require("@nomicfoundation/hardhat-toolbox");

const WALLET_SEP_BASE_PRIVATE_KEY = "fa84ed0397968066eb2b75819e8d4d3c44209381259d67381c6efa099521f9a7";
const BASE_SCAN_API_KEY = "WKARRX469CKPWQYPJPHSN43AEUYR8GKDD3";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    basetest:{
      url: "https://sepolia.base.org",
      accounts: [
        WALLET_SEP_BASE_PRIVATE_KEY
      ]
    }
  },
  etherscan:{
    apiKey:{
      baseSepolia: BASE_SCAN_API_KEY
    },
    customChains:[
      {
        network: "basetest",
        urls:{
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://sepolia.basescan.org/"
        }
      }
    ]
  }
};

