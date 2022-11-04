const { expect } = require("chai");
const { ethers } = require('hardhat');

let Stacking;
let MTK;

describe('ERC20Stacking', function () {

  beforeEach(async function() {

    [owner, wallet1, wallet2] = await ethers.getSigners();


    const stacking = await ethers.getContractFactory('ERC20Stacking');

    const mtk = await ethers.getContractFactory('MyToken', wallet1);

    MTK = await mtk.deploy();
    await MTK.deployed();

    Stacking = await stacking.deploy(MTK.address);
    await Stacking.deployed();
    
    // MTK.connect(wallet1).mint(wallet2.address, 100);
    // MTK.connect(wallet1).mint(wallet1.address, 5000);
    // MTK.transfer(wallet2.address, 1000);

    // MTK.connect(owner).mint(owner.address, 100);
    // console.log(await MTK.owner(), " ", owner.address);

    // await MTK.connect(wallet1).approve(Stacking.address, 4000);
    // await MTK.connect(wallet2).approve(Stacking.address, 1000);
  });

  
  describe('onlyowner', function () {

    xit('should get the owner', async function () {

      await MTK.connect(wallet1).mint(wallet2.address, 100);

    })
  });

  describe('deployment', function () {

    xit('should mint tokens to wallet 1', async function () {

      expect(await MTK.balanceOf(wallet1.address)).to.equal(4000);

    })


    xit('should transfer tokens to wallet 2', async function () {

      expect(await MTK.balanceOf(wallet2.address)).to.equal(100);

    })
  })



  describe('depositTokens', function () {

    it('should deposit MTK', async function () {
      await MTK.mint(wallet1.address, 100);
      await MTK.approve(Stacking.address, 4000);
      
      await Stacking.connect(wallet1).depositTokens(100);
      expect(await MTK.balanceOf(Stacking.address)).to.equal(100);

      // await Stacking.connect(wallet2).depositTokens(ethers.utils.parseEther("50"));


      

      // expect(await MTK.balanceOf(wallet2.address)).to.equal(950);


      // expect(

      //   await Stacking.StackingBalance(wallet1.address)

      // ).to.equal(100);

      // expect(

      //   await Stacking.StackingBalance(wallet2.address)

      // ).to.equal(50);

    });

  })



  // describe('withdraw', function () {

  //   it('should withdraw MTK from the contract', async function () {

  //     await Stacking.connect(wallet1).depositTokens(600)

  //     await Stacking.connect(wallet1).withdrawTokens(100);


  //     expect(await MTK.balanceOf(wallet1.address)).to.equal(3500);

  //     expect(await Stacking.StackingBalance(wallet1.address)).to.equal(500);
  //   })



  //   it('should not allow withdrawing more than has been deposited', async function () {

  //     await expect(

  //       Stacking.connect(wallet1).withdrawTokens(10000)

  //     ).to.be.revertedWith("amount cannot be greater than stacked amount");

  //   })

  // })

})