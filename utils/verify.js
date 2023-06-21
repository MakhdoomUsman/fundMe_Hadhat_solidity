const { run } = require("hardhat");

const verify = async (contractAddress, args) => {
  console.log("Verifieng COntract");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("alreadt verified")) {
      console.log("ALready Veriiedc");
    } else {
      console.log(error);
    }
  }
};

module.exports = { verify };
