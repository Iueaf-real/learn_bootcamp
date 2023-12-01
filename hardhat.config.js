require("@nomicfoundation/hardhat-toolbox");
require('dotenv/config');
// require('@nomiclabs/hardhat-etherscan')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks:{
    Meter:{
      url:process.env.MeterTest_RPC_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
    Sepolia:{
      url:process.env.Sepolia_RPC_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
    customChains: [
      {
        network: "Meter",
        chainId: 83,
        urls: {
          apiURL: "https://blockscout.com/poa/sokol/api",
          browserURL: "https://blockscout.com/poa/sokol"
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  }
  

};
