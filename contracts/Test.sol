// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

// default 값에서 다른값으로 변경하는게 (0 -> 1)
// 일반값에서 다른값으로 변경하는 것 보다 비싼거 같음 (1 -> 2)
contract Test{
    uint public _uint1;
    uint public _uint2;
    uint public _uint3;

    constructor() {
        _uint2 = 1;
        _uint3 = 2;
    }

    function test1() external {
        _uint1 = 1;
        _uint1 = 0;
    }

    function test2() external {
        _uint1 = 1;
    }

    function test3() external {
        _uint2 = 2;
        _uint2 = 1;
    }

    function test4() external {
        _uint2 = 2;
    }

    function test5() external {
        _uint2 = 3;
        _uint2 = 2;
    }

    function test6() external {
        _uint2 = 3;
    }
}