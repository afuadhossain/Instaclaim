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

      App.contracts.FlightCompensation.deployed().then(function(instance){
        // App.transferFunds();
      });
    });
  },

  transferFunds: function(amountEther) {
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      //Account launching the contract
      var account = accounts[0]; 
      
      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {
        // Send money to deposit function
        return compensationInstance.deposit.sendTransaction({
          from: account, 
          value : web3.toWei(amountEther, "ether")
        });
      }).then(function(result) {
        console.log(result)
      }).catch(function(err) {   
        console.log(err.message);
      });
    });
  },

  callFunctionsTest: async function() {

    App.createClaim();

    await new Promise(r => setTimeout(r, 30000));

    App.updateFlight();

  },

  // Listen for events emitted from the contract
  createClaim: function(flightID, flightArrivalDateTime, airlineType) {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0]; 

      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {

        var travelers = flightList[flightID];
        var flightIDencoded = web3.fromAscii(flightID); // web3.toAscii(val) to convert back
        const hourInMilliSeconds = 10800000;
        
        var resultList = []
        for (key in travelers){
          if (!travelers[key].sent) {
            resultList.push(compensationInstance.addNewClaim(
              travelers[key].ID,
              flightIDencoded,
              airlineType,
              flightArrivalDateTime.getTime() + hourInMilliSeconds,
              flightArrivalDateTime.getTime() + 2*hourInMilliSeconds,
              flightArrivalDateTime.getTime() + 3*hourInMilliSeconds,
              travelers[key].ETHaddress,
              {from: account}).then(function(key, response) {
                  console.log(response)
                  travelers[key].sent = true;
                  //Check if there is a passenger left in the flight to confirm
                  for (key in travelers){
                    if (!travelers[key].sent)
                      return;
                  }
                  delete flightWaitingList[flightID];
                }.bind(null, key)
              ).catch(function(err) {   
                console.log(err.message);
              })
            );
          }
        }
        return resultList;
      }).then(function(result) {
        console.log(result)
      }).catch(function(err) {   
        console.log(err.message);
      });
    });
  },

  updateFlight: function(flightID, flightActualArrivalDateTime) {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      var flightIDencoded = web3.fromAscii(flightID); // web3.toAscii(val) to convert back

      App.contracts.FlightCompensation.deployed().then(async function(compensationInstance) {

        
        return [await compensationInstance.updateFlightStatus(
          flightIDencoded, 
          flightActualArrivalDateTime.getTime(), 
          {from: account}
          ), compensationInstance];
      }).then(async function(results) {
          console.log(results[0])
          var compensationInstance = results[1];
          var claimsCount = await compensationInstance.getClaimsCount(flightIDencoded, {from: account});
          return [claimsCount, compensationInstance];
      }).then(async function (results) {
          var claimsCount = results[0];
          var compensationInstance = results[1];
          for (var i = 0; i < claimsCount; i++){
            var response = await compensationInstance.getClaim(flightIDencoded, i, {from: account});
            var ID = response[0]; //claim.ID
            var status = response[5]; //claim.status
            var compensation = response[6]; //claim.compensation
            var ETHaddress = response[7]; //claim.addresss
            console.log(ID.toString(), status.toString(), compensation.toString(), ETHaddress.toString())
          }
      }).catch(function(err) {   
        console.log(err.message);
      });
    });
  }
};

flightList = {"AN.123.04.04.2020" : ""}

$(function() {
  $(window).on('load', function(){
    App.init();
  });
});