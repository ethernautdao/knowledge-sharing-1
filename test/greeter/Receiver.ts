import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Signer } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import { Receiver } from "../../typechain";


import { shouldBehaveLikeReceiver } from "./Receiver.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signer;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Receiver", function () {
    beforeEach(async function () {
      const receiverArtifact: Artifact = await artifacts.readArtifact("Receiver");
      this.receiver = <Receiver>await waffle.deployContract(this.signers.admin, receiverArtifact, []);
    });

    shouldBehaveLikeReceiver();
  });
});
