// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {

    // Mapping to keep track of balances for each address
    mapping(address => uint256) private balances;

    // Event that logs deposits and withdrawals
    //event Deposit(address indexed account, uint256 amount);
   
    // Function to deposit funds into the contract
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero.");
        balances[msg.sender] += msg.value;
        //emit Deposit(msg.sender, msg.value);
    }

    // Function to check the balance of the caller
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}