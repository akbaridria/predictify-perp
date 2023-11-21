// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

library Types {

  struct Order {
    bool isEntity;
    address user;
    uint256 amount;
    int256 price;
    uint64 direction;
    uint256 times;
    string betOn;
    uint64 status;
  }

}