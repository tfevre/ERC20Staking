// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "contracts/MyToken.sol";
import "contracts/BoredAlpacas.sol";

contract ERC20Stacking {
    MyToken public ERC20Token;
    BoredAlpacas private ERC721Token;
   
    address owner;
    mapping(address => uint256) public stakingBalance;
    mapping(address => uint256) public depositedTime;

    constructor(MyToken t) {
        ERC20Token = t;
        // ERC721Token = b;
        owner = msg.sender;
    }

    function depositTokens(uint256 _amount) public {

        // amount should be > 0
        require (_amount > 0, "amount cannot be 0");

        // transfer MTK to this contract
        ERC20Token.transferFrom(msg.sender, address(this), _amount);
        
        // update staking balance
        // stakingBalance[msg.sender] = _amount;
        // // update timeToWithdraw
        // depositedTime[msg.sender] = block.timestamp;
    }


    function withdrawTokens(uint _amount) public {

        // amount should be > 0
        require (_amount > 0, "amount cannot be 0");
        // amount should be < total stacked
        require (_amount <  stakingBalance[msg.sender], "amount cannot be greater than stacked amount");
        // Time should be at least 30 seconds
        require (block.timestamp >= (depositedTime[msg.sender] + 20 seconds), "you need to wait a little more seconds");

        // transfer MTK to this contract
        ERC20Token.transfer(msg.sender, _amount);
        
        // update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] - _amount;

        // Mint an NFT
        ERC721Token.safeMint(msg.sender);
    }

}
