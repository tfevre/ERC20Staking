require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "FBTIGR9W25HR8X9GB9VPGN4H41VSCTPV7W",
  },
  networks: {
    meta: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: ["fedf5665f0bdd2a03766afe485a5d14f03f13d1c1692bea03a64982f811f5579"],
    }
  },
};
