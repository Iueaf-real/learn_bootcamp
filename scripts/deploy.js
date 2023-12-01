const { ethers } = require("hardhat");

async function main() {
  const [signers] = await ethers.getSigners();
  const TOKEN = await ethers.getContractFactory("MyERC20");
  const token = await TOKEN.deploy();
  // await token.deployed();
  console.log("合约地址：", await token.getAddress());
  //console.log("部署合约后的交易详情：", token.deploymentTransaction());

}

main();