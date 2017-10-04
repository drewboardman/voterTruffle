var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ["Drew", "Jonathan", "TrevisAndTodd", "RexAmyRodrigo", "Chris", "Paul"]);
};
