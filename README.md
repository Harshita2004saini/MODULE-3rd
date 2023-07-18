## Project setup
We can do this project locally on our machine or in the cloud using the pre-installed environment on GitPod. GitPod is a great option if you're on a mobile phone,
or just want to get started without installing anything. We use remix here.
## ## Description
We will write a smart contract to create your own token on a local HardHat network. Once you have your contract, you should be able to use remix to interact with it. From remix, the contract owner should be able to mint tokens to a provided address. Any user should be able to burn and transfer tokens.
### Executing program

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() {
        name = "Doge Token";
        symbol = "DT";
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(to != address(0), "Invalid address");
        totalSupply += amount;
        balances[to] += amount;
    }

    function burn(uint256 amount) external {
        require(amount > 0, "Invalid amount");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        totalSupply -= amount;
        balances[msg.sender] -= amount;
    }

    function transfer(address to, uint256 amount) external {
        require(to != address(0), "Invalid address");
        require(amount > 0, "Invalid amount");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
       
## Author
Harshita saini
21bcs5576@cuchd.in

