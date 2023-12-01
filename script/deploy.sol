// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {EtherWallet} from "../contracts/EtherWallet.sol";

contract DeployOurEtherWallet is Script {

    function run() external returns (EtherWallet) {
        vm.startBroadcast();
        EtherWallet ot = new EtherWallet();
        vm.stopBroadcast();
        return ot;
    }
}