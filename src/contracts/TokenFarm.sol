// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './DappToken.sol';
import './DaiToken.sol';

contract TokenFarm{
    string public name = "Dapp Token Farm";
    DappToken public dappToken;
    DaiToken public daiToken;
    address[] public stakers;
    address public owner;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(DappToken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
        owner = msg.sender;
    }

    function stakeTokens(uint _amount) public {
        //
        require(_amount > 0, 'amount connot be 0');

        //transfer Mock Dai tokens  to this contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount);

        // Update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        //add users to stakers if Only they have not staked.
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        }

        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    //Issues tokens
    function issueTokens() public {
        require(msg.sender == owner, 'Caller must be the owner');
        for(uint i=0; i < stakers.length; i++){
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if(balance > 0){
                dappToken.transfer(recipient, balance);
            }
        }
    }

    //Unstake Token
    function unstakeTokens() public {
        //fetch stakeing balance
        uint balance = stakingBalance[msg.sender];

        //require amount greater than 0
        require(balance > 0, "staking balance cannot be 0");

        //reset the staking balance 
        stakingBalance[msg.sender] = 0;

        //Update staking status
        isStaking[msg.sender] = false;
    }
}