import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Signer } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import { Greeter } from "../../typechain";


import { shouldBehaveLikeGreeter } from "./Greeter.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signer;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Greeter", function () {
    beforeEach(async function () {
      const greeting: string = "Hello, world!";
      const greeterArtifact: Artifact = await artifacts.readArtifact("Greeter");
      this.greeter = <Greeter>await waffle.deployContract(this.signers.admin, greeterArtifact, [greeting]);
    });

    shouldBehaveLikeGreeter();
  });
});
