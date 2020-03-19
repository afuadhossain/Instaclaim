var FlightCompensation = artifacts.require("./FlightCompensation.sol");

module.exports = function(deployer) {
    deployer.deploy(FlightCompensation);
};