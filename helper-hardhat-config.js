const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x7422A64372f95F172962e2C0f371E0D9531DF276",
  },
  137: {
    name: "poligon",
    ethUsdPriceFeed: "0xa3286D59d9c932a6bEF904478abfec1B9D5d7790",
  },
};

const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;
module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
