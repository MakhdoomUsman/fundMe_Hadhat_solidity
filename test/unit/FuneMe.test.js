// const { assert } = require("chai");
// const { deployments, ethers, getNamedAccounts } = require("hardhat");

// describe("FundMe", async function () {
//   let fundMe;
//   let deployer;
//   let mockV3Aggregator;
//   beforeEach(async function () {
//     // const accounts = await ethers.getSigners();
//     deployer = (await getNamedAccounts()).deployer;
//     await deployments.fixture(["all"]);
//     fundMe = await ethers.getContractAt("FundMe", deployer);
//     mockV3Aggregator = await ethers.getContractAt("MockV3Aggregator", deployer);
//   });

//   describe("constructor", async function () {
//     it("sets the aggregator adresses corretly", async function () {
//       const response = await fundMe.priceFeed();
//       assert.equal(response, mockV3Aggregator.address);
//     });
//   });
// });
