import { ethers } from "hardhat";
import * as typechain from "../typechain-types";

describe("Test", () => {
  let contract: typechain.Test;

  before(async () => {
    const factory = await ethers.getContractFactory("Test");
    contract = await factory.deploy();
    await contract.deployed();
  });

  it("test1", async () => {
    const originVal = await contract._uint1();
    const tx = await contract.test1();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });

  it("test2", async () => {
    const originVal = await contract._uint1();
    const tx = await contract.test2();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });

  it("test3", async () => {
    const originVal = await contract._uint2();
    const tx = await contract.test3();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });

  it("test4", async () => {
    const originVal = await contract._uint2();
    const tx = await contract.test4();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });

  it("test5", async () => {
    const originVal = await contract._uint3();
    const tx = await contract.test5();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });

  it("test4", async () => {
    const originVal = await contract._uint3();
    const tx = await contract.test6();
    const receipt = await tx.wait();

    console.log(`
    original value: ${originVal}
    `);

    console.log(`
    gas used: ${receipt.gasUsed}
    `);
  });
});
