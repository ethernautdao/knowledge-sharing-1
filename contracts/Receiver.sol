// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol"; 

contract Receiver is Ownable {
    string public message;
    string public variable;
    
    constructor() {
    }

    function receivedMessage() public view returns (string memory) {
        return message;
    }

    function receiveMessage(string calldata _greeting) external {
        message = _greeting;
    }

    function setVariable(string calldata _newVar) external onlyOwner {
        variable = _newVar;
    }
}
