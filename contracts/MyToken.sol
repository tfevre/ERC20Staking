// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor() ERC20("MyToken", "MTK") {}

    function mint(address to, uint256 amount) onlyOwner public {
        _mint(to, amount);
    }


}


/* Notes

Remix VM contract address : 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
Remix VM contract owner : 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

*/