// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol"; 

error GreeterError();

contract Greeter is AccessControl {

    bytes32 public constant SETTER = keccak256("SETTER");

    string public greeting;


    constructor(string memory _greeting) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(SETTER, msg.sender);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) external onlyRole(SETTER) {
        greeting = _greeting;
    }

    function throwError() external pure {
        revert GreeterError();
    }
}
