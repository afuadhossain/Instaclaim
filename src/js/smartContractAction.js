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
        
      web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }
        //Account launching the contract
        var account = accounts[0]; 
        var contractAddress = App.contracts.FlightCompensation.deployed().address;
        
        App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {
          // Send money to deposit function
          return compensationInstance.deposit.sendTransaction({
            from: account, 
            value : web3.toWei("5", "ether")
          });
        }).then(function(result) {
          console.log(result)
        }).catch(function(err) {   
          console.log(err.message);
        });
      });
    });
  },

  callFunctionsTest: async function() {

    App.createClaim();

    await new Promise(r => setTimeout(r, 30000));

    App.updateFlight();

  },

  // Listen for events emitted from the contract
  createClaim: function() {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0]; 

      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {

        var flightID = flightToDeploy.flightID;
        var flightIDencoded = web3.fromAscii(flightID); // web3.toAscii(val) to inverse it
        var hour = flightToDeploy.flightTimeDev.split(':')[0];
        var minute = flightToDeploy.flightTimeDev.split(':')[1];
        var travelers = flightList[flightID];
        var time = new Date(travelers[Object.keys(travelers)[0]].flightDate);
        time.setHours(hour);
        time.setMinutes(minute);
        var hourInMilliSeconds = 10800000;
        var resultList = []
        
        for (key in travelers){
          resultList.push(compensationInstance.addNewClaim(
            travelers[key].ID,
            flightIDencoded,
            flightToDeploy.airlineType,
            time.getTime() + hourInMilliSeconds,
            time.getTime() + 2*hourInMilliSeconds,
            time.getTime() + 3*hourInMilliSeconds,
            travelers[key].ETHaddress,
            {from: account}).then(function(key, response) {
              console.log(response)
              delete flightList[flightID][key];
            }.bind(null, key)
            ).catch(function(err) {   
              console.log(err.message);
            })
          );
        }
        return resultList;
      }).then(function(result) {
        console.log(result)
      }).catch(function(err) {   
        console.log(err.message);
      });
    });
  },

  updateFlight: function() {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {
      return compensationInstance.updateFlightStatus("0x7465737400000000000000000000000000000000000000000000000000000000",650, {from: account});
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
  $(window).on('load', function(){
    App.init();
  });
});