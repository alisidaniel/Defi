const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function (deployer, networks, accounts) {
  //Deploy Mock DAI Token
  await deployer.deploy(DaiToken);
  const daiToken = await DaiToken.deployed();

  //Deploy Dapp Token
  await deployer.deploy(DappToken);
  const dappToken = await DappToken.deployed();

  //deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);
  const tokenFarm = await TokenFarm.deployed();

  // Transfer all tokens to tokensFarm (1 million)
  await dappToken.transfer(tokenFarm.address, "1000000000000000000000000");

  // Transfer 100 Mocks DAI tokens to investor
  await daiToken.transfer(accounts[1], "100000000000000000000");
};
