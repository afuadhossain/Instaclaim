var customer = {
  name : "",
  email : "",
  phone : "",
  carrier : "",
  flightNumber : "",
  flightDate : "",
  departure : "",
  arrival : "",
  ETHaddress : ""
}

var flightInfo = {
  flightID : "",
}


function validatePhoneNumber(inputtxt) {
  var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (inputtxt.match(phoneno)) 
    return true;
  else
    return false;
}

function validateEmail(mail) 
{
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(emailRegex)) 
    return true;
  else
    return false;
}

function validateName(name) 
{
  var nameRegex = /^[a-zA-Z\- ]*$/;
  if (name.match(nameRegex)) 
    return true;
  else
    return false;
}

function validateFlightNumber(code) 
{
  var flightNumberRegex = /^[a-zA-Z0-9_\-]*$/;
  if (code.match(flightNumberRegex)) 
    return true;
  else
    return false;
}

function checkValidity(id){
    console.log('id', id);
    var element = document.getElementById(id);
    var value = element.value;

    if (value.length <= 0) {
      element.setCustomValidity('The entry is required');
      element.className = "input-form-invalid";
      return false;
    }

    switch(id){
      case "name":
        if (validateName(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.name = value
          return true;
        } else {
          element.setCustomValidity('Enter a valid name');
          element.className = "input-form-invalid";
          return false;
        }
      case "email":
        if (validateEmail(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.email = value;
          return true;
        }
        else {
          element.setCustomValidity('Enter a valid email');
          element.className = "input-form-invalid";
          return false;
        }
      case "phone":
        if (validatePhoneNumber(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.phone = value;
          return true;
        }
        else {
          element.setCustomValidity('Enter a valid phone number');
          element.className = "input-form-invalid";
          return false;
        }
      case "carrier":
        customer.carrier = value;
        break;
      case "flightNumber":
        if (validateFlightNumber(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.flightNumber = value;
          return true;
        }
        else {
          element.setCustomValidity('Enter a valid flight number');
          element.className = "input-form-invalid";
          return false;
        }
      case "flightDate":
        customer.flightDate = value;
        break;
      case "departure":
        customer.departure = value;
        break;
      case "arrival":
        customer.arrival = value;
        break;
      case "ETHaddress":
        customer.ETHaddress = value;
        break;
      default: return false;
    }
}

function validateForm() {
  console.log("click submit")
  var keys = Object.keys(customer);
  
  keys.forEach(function (key, index) {
    checkValidity(key);
  });
  
}

function newValueKeyPress(id) {
    var element = document.getElementById(id);

    var valid = true;
    if (!element.reportValidity()){
      valid = checkValidity(id);
    }
}

function createFlightID(carrier, flightNumber, flightDate) {
  var flightID = "" + carrier + "." + flightNumber + "." + flightDate;
  var flightIDencoded = web3.fromAscii(flightID);

// web3.toAscii(val)
  
  return flightIDencoded;
}

var optionsAirport = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.3
  }, {
    name: 'city',
    weight: 0.2
  }]
};

var fuseAirport = new Fuse(airports, optionsAirport)



function autocompleteAirport(htmlID, side){
  var ac = $('#' + htmlID)
  .on('click', function(e) {
  e.stopPropagation();
  })
  .on('focus keyup', search)
  .on('keydown', onKeyDown);

  var wrap = $('<div>')
    .insertBefore(ac)
    .append(ac);

  var list = $('<div>')
    .addClass('autocomplete-results')
    .addClass('autocomplete-results-' + side)
    .on('click', '.autocomplete-result', function(e) {
      e.preventDefault();
      e.stopPropagation();
      selectIndex($(this).data('index'));
    })
    .appendTo(wrap);

  $(document)
    .on('mouseover', '.autocomplete-result', function(e) {
      var index = parseInt($(this).data('index'), 10);
      if (!isNaN(index)) {
        list.attr('data-highlight', index);
      }
    })
    .on('click', clearResults);

  function clearResults() {
    results = [];
    numResults = 0;
    list.empty();
  }

  function selectIndex(index) {
    if (results.length >= index + 1) {
      ac.val(results[index].iata);
      clearResults();
    }  
  }

  var results = [];
  var numResults = 0;
  var selectedIndex = -1;

  function search(e) {
    if (e.which === 38 || e.which === 13 || e.which === 40) {
      return;
    }
    
    if (ac.val().length > 0) {
      results = _.take(fuseAirport.search(ac.val()), 6);
      numResults = results.length;
      
      var divs = results.map(function(r, i) {
          return '<div class="autocomplete-result" data-index="'+ i +'">'
              + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
              + '<div class="autocomplete-location">'+ r.city +', '+ r.country +'</div>'
              + '</div>';
      });
      
      selectedIndex = -1;
      list.html(divs.join(''))
        .attr('data-highlight', selectedIndex);

    } else {
      numResults = 0;
      list.empty();
    }
  }

  // Find keycodes : https://keycode.info/
  function onKeyDown(e) {
    switch(e.which) {
      case 38: // up
        selectedIndex--;
        if (selectedIndex <= -1) {
          selectedIndex = -1;
        }
        list.attr('data-highlight', selectedIndex);
        break;
      case 13: // enter
        selectIndex(selectedIndex);
        break;
      case 9: // enter
        selectIndex(selectedIndex);
        e.stopPropagation();
        return;
      case 40: // down
        selectedIndex++;
        if (selectedIndex >= numResults) {
          selectedIndex = numResults-1;
        }
        list.attr('data-highlight', selectedIndex);
        break;

      default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default action (scroll / move caret)
  }
}

autocompleteAirport("departure", "left");
autocompleteAirport("arrival", "right");


var optionsAirlines = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.4
  }, {
    name: 'country',
    weight: 0.10
  }]
};
var fuseAirline = new Fuse(airlines, optionsAirlines)


function autocompleteAirlines(htmlID, side){
  var ac = $('#' + htmlID)
  .on('click', function(e) {
  e.stopPropagation();
  })
  .on('focus keyup', search)
  .on('keydown', onKeyDown);

  var wrap = $('<div>')
    .insertBefore(ac)
    .append(ac);

  var list = $('<div>')
    .addClass('autocomplete-results')
    .addClass('autocomplete-results-' + side)
    .on('click', '.autocomplete-result', function(e) {
      e.preventDefault();
      e.stopPropagation();
      selectIndex($(this).data('index'));
    })
    .appendTo(wrap);

  $(document)
    .on('mouseover', '.autocomplete-result', function(e) {
      var index = parseInt($(this).data('index'), 10);
      if (!isNaN(index)) {
        list.attr('data-highlight', index);
      }
    })
    .on('click', clearResults);

  function clearResults() {
    results = [];
    numResults = 0;
    list.empty();
  }

  function selectIndex(index) {
    if (results.length >= index + 1) {
      if (iata != "")
        ac.val(results[index].iata);
      else 
        ac.val(results[index].icao);
      clearResults();
    }  
  }

  var results = [];
  var numResults = 0;
  var selectedIndex = -1;

  function search(e) {
    if (e.which === 38 || e.which === 13 || e.which === 40) {
      return;
    }
    
    if (ac.val().length > 0) {
      results = _.take(fuseAirline.search(ac.val()), 5);
      numResults = results.length;
      
      var divs = results.map(function(r, i) {
          var abbrev = r.iata != "" ? r.iata : r.icao;
          return '<div class="autocomplete-result" data-index="'+ i +'">'
              + '<div><b>'+ abbrev +'</b> - '+ r.name +'</div>'
              + '<div class="autocomplete-location">'+ r.country +'</div>'
              + '</div>';
      });
      
      selectedIndex = -1;
      list.html(divs.join(''))
        .attr('data-highlight', selectedIndex);

    } else {
      numResults = 0;
      list.empty();
    }
  }

  // Find keycodes : https://keycode.info/
  function onKeyDown(e) {
    switch(e.which) {
      case 38: // up
        selectedIndex--;
        if (selectedIndex <= -1) {
          selectedIndex = -1;
        }
        list.attr('data-highlight', selectedIndex);
        break;
      case 13: // enter
        selectIndex(selectedIndex);
        break;
      case 9: // enter
        selectIndex(selectedIndex);
        e.stopPropagation();
        return;
      case 40: // down
        selectedIndex++;
        if (selectedIndex >= numResults) {
          selectedIndex = numResults-1;
        }
        list.attr('data-highlight', selectedIndex);
        break;

      default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default action (scroll / move caret)
  }
}

autocompleteAirlines("carrier", "left");

// Create datepicker element
const elem = document.querySelector('input[name="flightDate"]');
const datepicker = new Datepicker(elem, {
      // options here
});

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
        
      // App.callFunctionsTest();

    });
  },

  callFunctionsTest: async function() {

    App.createClaim();

    await new Promise(r => setTimeout(r, 30000));

    App.updateFlight();

  },

  // Listen for events emitted from the contract
  createClaim: function() {
    
    flightInfo.flightID = createFlightID(customer.carrier, customer.flightNumber, customer.flightDate);

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var contractAddress = App.contracts.FlightCompensation.deployed().address

      //Send money to fallback function
    //   web3.eth.sendTransaction({
    //     to: contractAddress, 
    //     from: account, 
    //     value:web3.toWei("0.005", "ether")
    //   },function(error, result){
    //     if(error)
    //         console.error(error);
    //  })

      App.contracts.FlightCompensation.deployed().then(function(compensationInstance) {
        // Send money to deposit function
        compensationInstance.deposit.sendTransaction({
          from: account, 
          value : web3.toWei("10", "ether")
        });

        dummyAddress = "0x0E667EAD48249e38B71c0d7Cc65bFBA3e724bEC4" //Will have to change that
        // Execute adopt as a transaction by sending account

        return compensationInstance.addNewClaim(
          123,
          flightInfo.flightID,
          1,
          301,
          601,
          901,
          dummyAddress,
          {from: account});
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

window.ValidateInputs = function(){
  alert('Validate called succesfully');    
}

function autocomplete2(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      var nbElements = 0;
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()
            || arr[i].city.substr(0, val.length).toUpperCase() == val.toUpperCase()
              || arr[i].iata.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                // ||arr[i].country.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          nbElements += 1;

          if (arr[i].iata.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*make the matching letters bold:*/
            b.innerHTML += "<strong>" + arr[i].iata.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].iata.substr(val.length);
          } else {
            b.innerHTML += arr[i].iata;
          }
          b.innerHTML += " - ";

          if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b.innerHTML += "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].name.substr(val.length);
          } else {
            b.innerHTML += arr[i].name;
          }

          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].iata + "'>";

          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            console.log(inp.value)
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }

        if (nbElements > 9)
          break;
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

// autocomplete2(document.getElementById("departure2"), airports);
// autocomplete2(document.getElementById("arrival2"), airports);
