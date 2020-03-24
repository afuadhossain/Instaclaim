App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: async function() {
    
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    
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

      //Send money to fallback function
      web3.eth.sendTransaction({
        to: contractAddress, 
        from: account, 
        value:web3.toWei("0.005", "ether")
      },function(error, result){
        if(error)
            console.error(error);
     })

      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {
        //Send money to deposit function
        compensationInstance.deposit.sendTransaction({
          from: account, 
          value : web3.toWei("0.015", "ether")
        });

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
