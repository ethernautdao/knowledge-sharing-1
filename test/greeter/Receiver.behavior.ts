import { expect } from "chai";

export function shouldBehaveLikeReceiver(): void {
  it("should return the last greeting", async function () {
    expect(await this.receiver.connect(this.signers.admin).receivedMessage()).to.equal("");

    await this.receiver.receiveMessage("Bonjour, le monde!");
    expect(await this.receiver.receivedMessage()).to.equal("Bonjour, le monde!");
  });

  it("should set and return custom var", async function () {
    await this.receiver.connect(this.signers.admin).setVariable("Custom VAR");

    expect(await this.receiver.connect(this.signers.admin).variable()).to.equal("Custom VAR");
  });
}
