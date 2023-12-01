// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20{
    uint256 price = 0.01 ether;
    constructor() ERC20("Special Token","Special")
    {
        _mint(msg.sender,1_000_000 * 10 ** decimals());
    }

    function  burn(uint256 amout) external {
        _burn(msg.sender,amout);
    }

    function buy() external payable {
        require(msg.value > 0,"You must send some ether");
        _mint(msg.sender, msg.value * 10 ** decimals() / price);
    }


}