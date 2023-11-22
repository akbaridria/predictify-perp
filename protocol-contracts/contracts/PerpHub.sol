// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./FeedConsumer.sol";
import "./libs/types.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PerpHub is Ownable {
  // variables
  mapping(string => address) public supportedMarket;
  mapping(uint256 => Types.Order) public orders;
  bool internal isShutDown = false;
  IERC20 erc20;
  uint256 public counter;
  uint256 public totalCurrentTrade;

  // modifiers
  modifier onlyEOA() {
    require(msg.sender == tx.origin, "only EOA");
    _;
  }

  // events
  event MarketAdded(string market, address oracleConsumer);
  event MarketRemoved(string market, address oracleConsumer);
  event MarketShutDown(bool isShutDown);
  event CreateOrder(address user, uint256 betAmount, string betOn, uint256 time);
  event Claim(address user, uint256 amount, uint256 counter);

  // constructor
  constructor(
    address _usdt
  ) Ownable(msg.sender) {

    erc20 = IERC20(_usdt);

  }

  // user fucntions
  // create order
  function createOrder(
    uint256 _amount,
    uint256 _fee, 
    string memory _betOn, 
    uint256 _time,
    uint64 _direction
  ) external onlyEOA() {
    // 1. validation
    require(_time > block.timestamp, "time should be higher than now");
    require(_time > 5 minutes, "should be more than 5 minutes");
    require(erc20.balanceOf(msg.sender) > _amount + _fee, "insufficient balance");
    require(_amount > 5e18, "minimum 5 usdc");
    require(_fee >= _amount * 10 / 100, "wrong fee");
    require(_amount <= erc20.balanceOf(address(this)) * 10 / 100, "hit max bet size");
    // direction 0. up 1. down
    require(_direction < 2, "wrong direction");

    address oracle = supportedMarket[_betOn];

    if(oracle == address(0)){
      revert("unsupported market");
    }

    // 2. transfer usdc to this contract
    erc20.transferFrom(msg.sender, address(this), _amount + _fee);

    // 3. get latest price
    FeedConsumer feedConsumer = FeedConsumer(oracle);
    (int256 price, ) = feedConsumer.getLatestData();
    
    // 4. create order
    // status order
    // 0. open
    // 1. lose
    // 2. win and unclaimed
    // 3. win and claimed

    orders[counter] = Types.Order({
      isEntity: true,
      user: msg.sender,
      amount: _amount,
      price: price,
      direction: _direction,
      times: _time,
      betOn: _betOn,
      status: 0
    });

    totalCurrentTrade += _amount;
    counter++;

    // 5. emit event create order
    emit CreateOrder(msg.sender, _amount, _betOn, _time);
  }

  // resolve unsolved trade
  function resolveRound(
    uint80[] memory _rounds,
    uint256[] memory _counters
  ) external onlyEOA() {

    for (uint256 i = 0; i < _rounds.length; i++) {
      uint64 status = check(_rounds[i], _counters[i]);
      if(status != 1000) {
        orders[_counters[i]].status = status;
        if(status == 2) {
          totalCurrentTrade -= orders[_counters[i]].amount;
        }
      }
    }
  }

  // claim
  function claim(
    uint80 _round,
    uint256 _counter
  ) external onlyEOA() {

    require(orders[_counter].isEntity, "not exist");
    require(orders[_counter].user == msg.sender, "unauthorized");
    require(orders[_counter].status == 0 || orders[_counter].status == 3, "has been resolved");

    if(orders[_counter].status == 3) {
      transferAndUpdate(msg.sender, orders[_counter].amount * 2, _counter);
    } else {
      uint64 status = check(_round, _counter);
      if(status != 1000) {
        if(status == 3) {
          transferAndUpdate(msg.sender, orders[_counter].amount * 2, _counter);
        }
        if(status == 2) {
          totalCurrentTrade -= orders[_counter].amount;
        }
      }
    }
  }

  // transfer and update status claimed
  function transferAndUpdate(
    address _user,
    uint256 _amount,
    uint256 _counter
  ) internal {
    erc20.transfer(_user, _amount);
    orders[_counter].status = 4;
    totalCurrentTrade -= orders[_counter].amount * 2;
    emit Claim(_user, _amount, _counter);
  }

  // check and adjust status
  function check(
    uint80 _round,
    uint256 _counter
  ) internal view returns (uint64) {
    uint64 status = 1000;

    Types.Order memory order = orders[_counter];
    if( order.status < 1 && order.times < block.timestamp && order.isEntity) {
      (int256 exitPrice, uint time) = getSpesificPrice(order.betOn, _round);
      uint256 diffTime;
      if(time > order.times) {
        diffTime = order.times - time;
      } else {
        diffTime = time - order.times;
      }
      if(diffTime < 20) {
        if(exitPrice > order.price) {
          if(order.direction == 0) {
            status = 3;
          } else {
            status = 2;
          }
        } else {
          if(order.direction == 0) {
            status = 2;
          } else {
            status = 3; 
          }
        }
      }
    }
    return status;
  }

  // get spesfict price on round
  function getSpesificPrice(string memory _key, uint80 time) internal view returns (int256, uint) {
    address oracle = supportedMarket[_key];
    if(oracle == address(0)) {
      revert("unsupported market");
    }

    FeedConsumer feedConsumer = FeedConsumer(oracle);

    int256 prices = 0;
    uint times = 0;

    try feedConsumer.getPrevData(time) returns (int256 result, uint startedAt) {
      prices = result;
      times = startedAt;
    } catch {
      revert("can't get oracle data");
    }
    return (prices, times);
  }

  // admin functions
  function addSupportedMarket(
    string memory _key, 
    address _value
  ) external onlyOwner {
    FeedConsumer oracle = new FeedConsumer(_value);
    supportedMarket[_key] = address(oracle);
    emit MarketAdded(_key, _value);
  }

  function removeSupportedMarket(
    string memory _key
  ) external onlyOwner {
    emit MarketRemoved(_key, supportedMarket[_key]);
    delete supportedMarket[_key];
  }

  function shutDownMarket(
    bool _value
  ) external onlyOwner {
    isShutDown = _value;
    emit MarketShutDown(_value);
  }
}