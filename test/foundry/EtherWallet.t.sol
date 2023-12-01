// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {EtherWallet} from "../../contracts/EtherWallet.sol";
import {DeployOurEtherWallet} from "../../script/deploy.sol";
contract EtherWalletTest is Test {
    EtherWallet public etherWallet;
    address private owner;
    
    function setUp() public {
    
        DeployOurEtherWallet seployOurEtherWallet = new DeployOurEtherWallet();
        
        etherWallet = seployOurEtherWallet.run();
        owner=etherWallet.getowner();
    }
    function testOther_withdraw() public {
        etherWallet.withdraw(1000000);
    }
    function testOwner_withdraw() public {
        vm.prank(owner);
        assertEq(owner, msg.sender);
        //etherWallet.withdraw(1000000);
    }


}