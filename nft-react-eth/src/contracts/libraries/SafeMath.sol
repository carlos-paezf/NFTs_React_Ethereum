// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


library SafeMath {
    function add(uint256 x, uint256 y) internal pure returns (uint256) {
        uint256 r = x + y;
        require(r >= x, 'Safemath: addition overflow');
        return r;
    }

    function sub(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y <= x, 'Safemath: subtraction overflow');
        uint256 r = x - y;
        return r;
    }

    function mul(uint256 x, uint256 y) internal pure returns (uint256) {
        if (x == 0) return 0;
        uint256 r = x * y;
        require(r / x == y, 'Safemath: multiplication overflow');
        return r;
    }

    function divide(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y > 0, 'Safemath: division overflow');
        if (x == 0) return 0;
        uint256 r = x / y;
        return r;
    }

    function mod(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y != 0, 'Safemath: modulo by zero');
        return x % y;
    }
}