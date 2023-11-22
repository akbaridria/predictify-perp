// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { IAggregator } from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregator.sol";

contract FeedConsumer {
    
    IAggregator internal dataFeed;

    constructor(address aggregatorProxy) {
        dataFeed = IAggregator(aggregatorProxy);
    }

    function getLatestData() public view returns (int256, uint) {
        ( , int256 answer, uint startedAt , , ) = dataFeed.latestRoundData();
        return (answer, startedAt);
    }

    function getPrevData(uint80 _roundId) public view returns (int256, uint) {
        ( , int256 answer, uint startedAt , , ) = dataFeed.getRoundData(_roundId);
        return (answer, startedAt);
    }

    function decimals() public view returns (uint8) {
        return dataFeed.decimals();
    }
}
