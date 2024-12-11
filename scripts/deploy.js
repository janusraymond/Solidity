const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.deployContract("SimpleContract", []);

    await contract.waitForDeployment();

    console.log(`Contract deployed to ${contract.target}`);;
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});





// async function main() {
//     const [deployer] = await ethers.getSigners();
//     console.log("Deploying contracts with the account:", deployer.address);

//     const Bank = await ethers.getContractFactory("Bank");
//     const bank = await Bank.deploy();
//     console.log("Bank contract deployed to:", bank.address);
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });