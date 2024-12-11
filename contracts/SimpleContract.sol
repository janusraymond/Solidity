// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract SimpleContract {
    address public owner;
    uint256 public number;

    constructor(){
        owner = msg.sender;
    }

    function read() public view returns (address){
        return owner;
    }

    function write(uint _number) public{
        number = _number;
    }
}