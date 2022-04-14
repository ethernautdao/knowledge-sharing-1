/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Greeter, GreeterInterface } from "../../contracts/Greeter";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GreeterError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SETTER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "greeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "throwError",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e8838038062000e888339810160408190526200003491620001f6565b620000416000336200008a565b6200006d7f8e4f01b2ef10e587f670bbfd448bba9a57a36fd9c81549b587269120cb62b24d336200008a565b8051620000829060019060208401906200013a565b50506200030e565b6200009682826200009a565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000096576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620000f63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200014890620002d2565b90600052602060002090601f0160209004810192826200016c5760008555620001b7565b82601f106200018757805160ff1916838001178555620001b7565b82800160010185558215620001b7579182015b82811115620001b75782518255916020019190600101906200019a565b50620001c5929150620001c9565b5090565b5b80821115620001c55760008155600101620001ca565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200020a57600080fd5b82516001600160401b03808211156200022257600080fd5b818501915085601f8301126200023757600080fd5b8151818111156200024c576200024c620001e0565b604051601f8201601f19908116603f01168101908382118183101715620002775762000277620001e0565b8160405282815288868487010111156200029057600080fd5b600093505b82841015620002b4578484018601518185018701529285019262000295565b82841115620002c65760008684830101525b98975050505050505050565b600181811c90821680620002e757607f821691505b6020821081036200030857634e487b7160e01b600052602260045260246000fd5b50919050565b610b6a806200031e6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806391d1485411610081578063cfae32171161005b578063cfae3217146101db578063d547741f146101f0578063ef690cc01461020357600080fd5b806391d1485414610189578063a217fddf146101c0578063a4136862146101c857600080fd5b80632f7643a8116100b25780632f7643a81461014757806336568abe1461014f5780634cf409d01461016257600080fd5b806301ffc9a7146100d9578063248a9ca3146101015780632f2ff15d14610132575b600080fd5b6100ec6100e736600461087f565b61020b565b60405190151581526020015b60405180910390f35b61012461010f3660046108a9565b60009081526020819052604090206001015490565b6040519081526020016100f8565b6101456101403660046108c2565b610242565b005b61014561026d565b61014561015d3660046108c2565b610286565b6101247f8e4f01b2ef10e587f670bbfd448bba9a57a36fd9c81549b587269120cb62b24d81565b6100ec6101973660046108c2565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610124600081565b6101456101d6366004610914565b610317565b6101e3610355565b6040516100f891906109f5565b6101456101fe3660046108c2565b6103e7565b6101e361040d565b60006001600160e01b03198216637965db0b60e01b148061023c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526020819052604090206001015461025e813361049b565b6102688383610519565b505050565b60405163c8508fc360e01b815260040160405180910390fd5b6001600160a01b03811633146103095760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61031382826105b7565b5050565b7f8e4f01b2ef10e587f670bbfd448bba9a57a36fd9c81549b587269120cb62b24d610342813361049b565b81516102689060019060208501906107e6565b60606001805461036490610a28565b80601f016020809104026020016040519081016040528092919081815260200182805461039090610a28565b80156103dd5780601f106103b2576101008083540402835291602001916103dd565b820191906000526020600020905b8154815290600101906020018083116103c057829003601f168201915b5050505050905090565b600082815260208190526040902060010154610403813361049b565b61026883836105b7565b6001805461041a90610a28565b80601f016020809104026020016040519081016040528092919081815260200182805461044690610a28565b80156104935780601f1061046857610100808354040283529160200191610493565b820191906000526020600020905b81548152906001019060200180831161047657829003601f168201915b505050505081565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610313576104d7816001600160a01b03166014610636565b6104e2836020610636565b6040516020016104f3929190610a62565b60408051601f198184030181529082905262461bcd60e51b8252610300916004016109f5565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610313576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556105733390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610313576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610645836002610af9565b610650906002610b18565b67ffffffffffffffff811115610668576106686108fe565b6040519080825280601f01601f191660200182016040528015610692576020820181803683370190505b509050600360fc1b816000815181106106ad576106ad610b30565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106106dc576106dc610b30565b60200101906001600160f81b031916908160001a9053506000610700846002610af9565b61070b906001610b18565b90505b6001811115610790577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061074c5761074c610b30565b1a60f81b82828151811061076257610762610b30565b60200101906001600160f81b031916908160001a90535060049490941c9361078981610b46565b905061070e565b5083156107df5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610300565b9392505050565b8280546107f290610a28565b90600052602060002090601f016020900481019282610814576000855561085a565b82601f1061082d57805160ff191683800117855561085a565b8280016001018555821561085a579182015b8281111561085a57825182559160200191906001019061083f565b5061086692915061086a565b5090565b5b80821115610866576000815560010161086b565b60006020828403121561089157600080fd5b81356001600160e01b0319811681146107df57600080fd5b6000602082840312156108bb57600080fd5b5035919050565b600080604083850312156108d557600080fd5b8235915060208301356001600160a01b03811681146108f357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561092657600080fd5b813567ffffffffffffffff8082111561093e57600080fd5b818401915084601f83011261095257600080fd5b813581811115610964576109646108fe565b604051601f8201601f19908116603f0116810190838211818310171561098c5761098c6108fe565b816040528281528760208487010111156109a557600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b838110156109e05781810151838201526020016109c8565b838111156109ef576000848401525b50505050565b6020815260008251806020840152610a148160408501602087016109c5565b601f01601f19169190910160400192915050565b600181811c90821680610a3c57607f821691505b602082108103610a5c57634e487b7160e01b600052602260045260246000fd5b50919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610a9a8160178501602088016109c5565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351610ad78160288401602088016109c5565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610b1357610b13610ae3565b500290565b60008219821115610b2b57610b2b610ae3565b500190565b634e487b7160e01b600052603260045260246000fd5b600081610b5557610b55610ae3565b50600019019056fea164736f6c634300080d000a";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}