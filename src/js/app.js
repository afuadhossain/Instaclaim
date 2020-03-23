App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("FlightCompensation.json", function(data) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.FlightCompensation = TruffleContract(data);
      // Connect provider to interact with contract
      App.contracts.FlightCompensation.setProvider(App.web3Provider);

      // App.contracts.FlightCompensation.deployed().then(function(instance){
      //   console.log(instance)
      //   ;});
        
      App.createClaim();
    });
  },

  // Listen for events emitted from the contract
  createClaim: function() {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var contractAddress = App.contracts.FlightCompensation.deployed().address

      web3.eth.sendTransaction({
        to: contractAddress, 
        from: account, 
        value:web3.toWei("0.05", "ether")
      },function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
     })

      App.contracts.FlightCompensation.deployed().then(function(instance) {
        compensationInstance = instance;
        dummyAddress = "0x38Ce67d8Ef62A091ffB4474ccb428b588A559748" //Will have to change that
        // Execute adopt as a transaction by sending account
        compensationInstance.deposit();
        return compensationInstance.addNewClaim(12,"0x7465737400000000000000000000000000000000000000000000000000000000",1,1,2,3, dummyAddress, {from: account});
      }).then(function(result) {
        console.log(result)
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
