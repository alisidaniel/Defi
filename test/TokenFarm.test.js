const { assert } = require("chai");

const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

require("chai").use(require("chai-as-promised")).should();

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("TokenFarm", ([owner, investor]) => {
  let daiToken, dappToken, tokenFarm;

  before(async () => {
    //Load contracts
    daiToken = await DaiToken.new();
    dappToken = await DappToken.new();
    tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address);

    //Transfer all Dapp tokens to farm (1 million)
    await dappToken.transfer(tokenFarm.address, tokens("1000000"));

    //Transfer token to investor
    await daiToken.transfer(investor, tokens("100"), { from: owner });
  });

  //write task here
  describe("Mock DAI deployment", async () => {
    it("has a name", async () => {
      const name = await daiToken.name();
      assert.equal(name, "Mock DAI Token", "Contract test name passed");
    });
  });

  describe("DApp Token deployment", async () => {
    it("has a name", async () => {
      const name = await dappToken.name();
      assert.equal(name, "DApp Token", "Contract test name passed");
    });
  });

  describe("Token Farm deployment", async () => {
    it("has a name", async () => {
      const name = await tokenFarm.name();
      assert.equal(name, "Dapp Token Farm", "Contract test name passed");
    });

    it("contract has tokens", async () => {
      let balance = await dappToken.balanceOf(tokenFarm.address);
      assert.equal(balance.toString(), tokens("1000000"));
    });
  });

  describe("Farming Tokens", async () => {
    it("rewards investors for staking mDai tokens", async () => {
      let result;

      // check investor balance before staking
      result = await daiToken.balanceOf(investor);
      assert.equal(
        result.toString(),
        tokens("100"),
        "Investor Mock Dai wallet balance correct before staking"
      );

      // Stake Mock Dai
      await daiToken.approve(tokenFarm.address, tokens("100"), {
        from: investor,
      });
      await tokenFarm.stakeTokens(tokens("100"), { from: investor });

      result = await daiToken.balanceOf(investor);
      assert.equal(
        result.toString(),
        tokens("0"),
        "Investor Mock Dai wallet balance correct after staking"
      );

      result = await daiToken.balanceOf(tokenFarm.address);
      assert.equal(
        result.toString(),
        tokens("100"),
        "Token Farm Mock Dai balance correct after staking"
      );

      result = await tokenFarm.stakingBalance(investor);
      assert.equal(
        result.toString(),
        tokens("100"),
        "Investor staking balance correct after staking"
      );

      result = await tokenFarm.isStaking(investor);
      assert.equal(
        result.toString(),
        "true",
        "Investor staking status correct after staking"
      );
    });
  });
});
