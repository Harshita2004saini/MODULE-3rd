const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying MyToken contract with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();

  await myToken.deployed();

  console.log("MyToken deployed to:", myToken.address);

  // The address of the deployed contract can be used in the frontend to interact with it.
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
