// function deployfunc() {
//     console.log("HI");
// }

// const { getNamedAccounts } = require("hardhat");

// module.exports.default = deployfunc;
const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  //   const ethUdsPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }
  const args = [ethUsdPriceFeedAddress];

  const fundme = await deploy("FundMe", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmation || 1,
  });
  if (!developmentChains.includes(network.name) && process.env.SEPOLIA_URL) {
    await verify(fundme.address, args);
  }
  log("----------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
