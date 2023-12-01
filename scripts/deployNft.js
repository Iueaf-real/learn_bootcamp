const { ethers,run } = require("hardhat");
async function main() {
  const ContractFactory = await ethers.getContractFactory("MyERC721");
  const contract = await ContractFactory.deploy("MyERC721 Contract", "MyERC721");


  // Wait for the contract to be mined and get the contract's deployed bytecode
  //await contract.deployed();
  const newAddress = await contract.getAddress()
  console.log("Contract deployed to:", newAddress);

  // wait 1 minute for the contract to be mined
  await new Promise((r) => setTimeout(r, 60000));

  // Verify the contract
  try {
    await run("verify:verify", {
      address: newAddress,
      constructorArguments: ["MyERC721 Contract", "MyERC721"],
    });
    console.log(`Contract verified successfully.`);
  } catch (error) {
    console.error("Failed to verify contract:", error);
  }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
