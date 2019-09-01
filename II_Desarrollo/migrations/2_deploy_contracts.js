var Garantia = artifacts.require("./Garantia.sol");

module.exports = function(deployer) {
  deployer.deploy(Garantia);
};
