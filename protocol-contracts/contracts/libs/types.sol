// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

library Types {

  struct Order {
    address user;
    uint256 amount;
    uint256 times;
    string betOn;
  }

}