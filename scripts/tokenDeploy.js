const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.deployContract("DangalToken", ["0x5B1f7690904D0edD4fD71eaf83ac2AE9C215D381"]);

    await contract.waitForDeployment();

    console.log(`Contract deployed to ${contract.target}`);;
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});