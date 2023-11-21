// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./FeedConsumer.sol";
import "./libs/types.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract PerpHub is Ownable {
  // variables
  mapping(string => address) public supportedMarket;
  bool internal isShutDown;

  // modifiers

  // events
  event MarketAdded(string market, address oracleConsumer);
  event MarketRemoved(string market, address oracleConsumer);
  event MarketShutDown(bool isShutDown);

  // constructor
  constructor() Ownable(msg.sender) {}

  // user fucntions
  function createOrder(uint256 _amount, string memory _betOn) external {
   
  }


  function getSpesificPrice(string memory _key, uint80 time) internal view returns (int256) {
    address oracle = supportedMarket[_key];
    if(oracle == address(0)) {
      revert("unsupported market");
    }

    FeedConsumer feedConsumer = FeedConsumer(oracle);

    int256 prices = 0;

    try feedConsumer.getPrevData(time) returns (int256 result) {
      prices = result;
    } catch {
      
    }
    return prices;
  }

  // admin functions
  function addSupportedMarket(string memory _key, address _value) external onlyOwner {
    FeedConsumer oracle = new FeedConsumer(_value);
    supportedMarket[_key] = address(oracle);
    emit MarketAdded(_key, _value);
  }

  function removeSupportedMarket(string memory _key) external onlyOwner {
    emit MarketRemoved(_key, supportedMarket[_key]);
    delete supportedMarket[_key];
  }

  function shutDownMarket(bool _value) external onlyOwner {
    isShutDown = _value;
    emit MarketShutDown(_value);
  }
}