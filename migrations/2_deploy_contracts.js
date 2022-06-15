const NFTReactETH = artifacts.require("NFTReactETH");

module.exports = function (deployer) {
    deployer.deploy(NFTReactETH)
}