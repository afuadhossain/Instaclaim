var flightList = {};
var customer = {};

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

var optionsAirlines = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.25
  }, {
    name: 'icao',
    weight: 0.25
  }]
};

var fuseAirport = new Fuse(airports, optionsAirport)
var fuseAirline = new Fuse(airlines, optionsAirlines)

// Create datepicker element
const elem = document.querySelector('input[id="flightDate"]');
const datepicker = new Datepicker(elem, {
    autohide: true,
    clearBtn: true,
});

$('#flightDate').on('changeDate', function(e) {
  checkValidity('flightDate');
  document.getElementById('ETHaddress').focus();
});

function initializeNewCustomer(){
  customer = {
    name : "",
    email : "",
    phone : "",
    carrier : "",
    flightNumber : "",
    flightDate : "",
    departure : "",
    arrival : "",
    ETHaddress : "",
    ID : -1,
  };
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

function validateETHaddress(ETHaddress)
{
  if (web3.isAddress(ETHaddress))
    return true;
  else 
    return false;
}

function validateAirport(iata)
{
  for (key in airports){
    if (airports[key].iata.toUpperCase() == iata.toUpperCase())
      return true;
  }
  return false;
}

function validateAirline(iata)
{
  
  for (key in airlines) {
    if (iata.length == 2) {
      if (airlines[key].iata != "" &&
                airlines[key].iata.toUpperCase() == iata.toUpperCase()) {
        return true;
      }
    }
    else if (iata.length == 3) {
      if (airlines[key].icao != "" &&
                airlines[key].icao.toUpperCase() == iata.toUpperCase()) {
        return true;
      }
    }
    else 
      return false;
  }
  return false;
}

function validateDate(flightDate)
{
  var today = new Date();
  today.setHours(0,0,0,0); //Disregard the time in the date
  var date = new Date(flightDate);
  if (date >= today) 
    return true;
  else
    return false;
}

function checkValidity(id){
    var element = document.getElementById(id);
    var value = element.value.trim();

    if (value.length <= 0) {
      if (!(["flightDate", "arrival", "departure", "carrier"].includes(id))) {
        element.setCustomValidity('The entry is required');
      }
      element.className = "input-form-invalid";
      return false;
    }

    switch(id){
      case "name":
        if (validateName(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.name = value;
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
        if (validateAirline(value)){
          element.className = "input-form-valid";
          customer.carrier = value.toUpperCase();
          return true;
        }
        else {
          element.className = "input-form-invalid";
          return false;
        }
      case "flightNumber":
        if (validateFlightNumber(value)){
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.flightNumber = value.toUpperCase();
          return true;
        }
        else {
          element.setCustomValidity('Enter a valid flight number');
          element.className = "input-form-invalid";
          return false;
        }
      case "flightDate":
        if (validateDate(value)){
          element.className = "input-form-valid";
          customer.flightDate = value;
          return true;
        }
        else{
          element.className = "input-form-invalid";
          return false;
        }
      case "departure":
        if (validateAirport(value)){
          element.className = "input-form-valid";
          customer.departure = value.toUpperCase();
          if (customer.departure == customer.arrival){
            element.className = "input-form-invalid";
            return false
          } 
          else 
            return true;
        }
        else {
          element.className = "input-form-invalid";
          return false;
        }
      case "arrival":
        if (validateAirport(value)){
          element.className = "input-form-valid";
          customer.arrival = value.toUpperCase();
          if (customer.departure == customer.arrival){
            element.className = "input-form-invalid";
            return false
          } 
          else 
            return true;
        }
        else {
          element.className = "input-form-invalid";
          return false;
        }
      case "ETHaddress":
        if (validateETHaddress(value)) {
          element.setCustomValidity('');
          element.className = "input-form-valid";
          customer.ETHaddress = value;
          return true;
        }
        else {
          element.setCustomValidity('Enter a valid ETH address');
          element.className = "input-form-invalid";
          return false;
        }
      default: return false;
    }
}

function newValueKeyPress(id) {
  var element = document.getElementById(id);

  if (!element.reportValidity()) {
    checkValidity(id);
  }
}

function autocompleteAirport(htmlID, side){
  var ac = $('#' + htmlID)
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
        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover")
          }
          list[0].children[index].classList.add("autocomplete-hover")
        }
      }
    })
    .on('click', clearResults);
  
  $(document)
    .on('click', function(e) {
      clearResults;
    });

  function clearResults() {
    results = [];
    numResults = 0;
    list.empty();
  }

  function selectIndex(index) {
    if (results.length >= index + 1) {
      ac.val(results[index].iata);
      clearResults();
      checkValidity(htmlID);
    }  
  }

  var results = [];
  var numResults = 0;
  var selectedIndex = 0;

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
      
      list.html(divs.join(''))

      selectedIndex = 0;
      if (list[0].children.length > 0)
        list[0].children[selectedIndex].classList.add("autocomplete-hover");

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
        if (selectedIndex <= 0) {
          selectedIndex = 0;
        } 

        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover")
          }
          list[0].children[selectedIndex].classList.add("autocomplete-hover")
        }
        break;
      case 13: // enter
        selectIndex(selectedIndex);
        break;
      case 9: // tab
        selectIndex(selectedIndex);
        e.stopPropagation();
        return;
      case 40: // down
        selectedIndex++;
        if (selectedIndex >= numResults) {
          selectedIndex = numResults-1;
        }
        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover")
          }
          list[0].children[selectedIndex].classList.add("autocomplete-hover")
        }
        break;

      default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default action (scroll / move caret)
  }
}

function autocompleteAirlines(htmlID, side){
  var ac = $('#' + htmlID)
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
        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover");
          }
          list[0].children[index].classList.add("autocomplete-hover");
        }
      }
    })
    .on('click', clearResults);

  $(document)
  .on('click', function(e) {
    clearResults();
  });

  function clearResults() {
    results = [];
    numResults = 0;
    list.empty();
  }

  function selectIndex(index) {
    if (results.length >= index + 1) {
      if (results[index].iata != "")
        ac.val(results[index].iata);
      else 
        ac.val(results[index].icao);
      clearResults();
      checkValidity(htmlID);
    }  
  }

  var results = [];
  var numResults = 0;
  var selectedIndex = 0;

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
      
      list.html(divs.join(''));

      selectedIndex = 0;
      if (list[0].children.length > 0)
        list[0].children[selectedIndex].classList.add("autocomplete-hover");

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
        if (selectedIndex <= 0) {
          selectedIndex = 0;
        }

        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover")
          }
          list[0].children[selectedIndex].classList.add("autocomplete-hover")
        }
        break;
      case 13: // enter
        selectIndex(selectedIndex);
        break;
      case 9: // tab
        selectIndex(selectedIndex);
        e.stopPropagation();
        return;
      case 40: // down
        selectedIndex++;
        if (selectedIndex >= numResults) {
          selectedIndex = numResults-1;
        }
        if (list[0].children.length) {
          for (var i = 0; i < list[0].children.length; i++) {
            list[0].children[i].classList.remove("autocomplete-hover")
          }
          list[0].children[selectedIndex].classList.add("autocomplete-hover")
        }
        break;

      default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default action (scroll / move caret)
  }
}

function createFlightID(carrier, flightNumber, flightDate) {
  flightDate = flightDate.replace(/\//g, ".");
  var flightID = "" + carrier + "." + flightNumber + "." + flightDate;
  return flightID;
}

function validateForm() {
  var keys = Object.keys(customer);
  
  var documentInvalid = false;
  keys.filter(key => key != "ID").forEach(function (key, index) {
    if(!checkValidity(key)) {
      document.getElementById(key).reportValidity();
      documentInvalid = true;
    }
  });

  if (documentInvalid)
    return false;
    
  //Use the current time (up to ms) customer ID
  customer.ID = Date.now();

  //Replacing with the upper case values
  $('#flightNumber').val(customer.flightNumber); 
  $('#departure').val(customer.departure);
  $('#arrival').val(customer.arrival);
  $('#carrier').val(customer.carrier);

  console.log(customer);

  var flightID = createFlightID(customer.carrier, customer.flightNumber, customer.flightDate);

  if (!(flightID in flightList)) {
    flightList[flightID] = {};
  } 
  flightList[flightID][customer.ID] = customer;

  initializeNewCustomer();

  document.getElementById("devPage").style.display = "block";
}

initializeNewCustomer();

autocompleteAirport("departure", "left");
autocompleteAirport("arrival", "right");
autocompleteAirlines("carrier", "left");

