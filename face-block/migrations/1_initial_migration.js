var Migrations = artifacts.require("./Migrations.sol");

//preparing for deployments
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
