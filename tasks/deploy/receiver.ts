import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { Receiver, Receiver__factory } from "../../typechain";


task("deploy:Receiver")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const receiverFactory: Receiver__factory = <Receiver__factory>await ethers.getContractFactory("Receiver");
    const receiver: Receiver = <Receiver>await receiverFactory.deploy(taskArguments.greeting);
    await receiver.deployed();
    console.log("Receiver deployed to: ", receiver.address);
  });
