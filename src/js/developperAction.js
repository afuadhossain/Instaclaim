var flightToDeploy = { 
  flightID : "",
  flightArrivalDate : "",
  flightArrivalTime : "",
  airlineType : ""
};

var flightToUpdate = {
  flightID : "",
  flightActualArrivalDate : "",
  flightActualArrivalTime : ""
};

var displayErrorMessage = false;
var sendAmountEther = 0;

// Create datepicker elements
const flightArrivalDateElem = document.querySelector('input[id="flightArrivalDate"]');
const datepickerArrivalDate = new Datepicker(flightArrivalDateElem, {
    autohide: true,
    clearBtn: true,
});
$('#flightArrivalDate').on('changeDate', function(e) {
  checkValidityDev('flightArrivalDate');
  document.getElementById('flightArrivalTime').focus();
});

const flightActualArrivalDateElem = document.querySelector('input[id="flightActualArrivalDate"]');
const datepickerActualArrivalDate = new Datepicker(flightActualArrivalDateElem, {
    autohide: true,
    clearBtn: true,
});
$('#flightActualArrivalDate').on('changeDate', function(e) {
  document.getElementById('flightActualArrivalTime').focus();
});

function validateFlightID(flightID) 
{
  if (flightID in flightList) 
    return true;
  else
    return false;
}

function validateFlightTime(flightTime) 
{
  var timeRegex = /^[0-2]{0,1}[0-9]{1}:[0-5]{1}[0-9]{1}$/; //HH:MM format
  if (flightTime.match(timeRegex)) {
    var hour = parseInt(flightTime.split(':')[0]);
    if (hour < 24){
      return true;
    }
  }
  return false;
}

function validateAirlineType(type) 
{
  var validTypes = ["0", "1"];
  if (validTypes.includes(type)) 
    return true;
  else
    return false;
}

function validateAmount(amount) 
{
  var amountRegex = /^(([0-9]+)|(([0-9]+)\.([0-9]+)))$/; //Numerical values including dec
  if (amount.match(amountRegex)) {
    if (parseFloat(amount) > 0){
      return true;
    }
  }
  return false;
}

function checkValidityDev(id) {
    var element = document.getElementById(id);
    var value = element.value.trim();

    if (value.length <= 0) {
        element.setCustomValidity('The entry is required');
        element.className = "input-form-invalid";
        return false;
    }

    switch(id){
        case "sendAmount":
          if (validateAmount(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            sendAmountEther = value;
            return true;
          } else {
            element.setCustomValidity('Enter a valid amount');
            element.className = "input-form-invalid";
            return false;
          }
        case "setFlightID":
          if (validateFlightID(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightToDeploy.flightID = value;
            return true;
          } else {
            element.setCustomValidity('This FlightID does not exist');
            element.className = "input-form-invalid";
            return false;
          }
        case "flightArrivalDate":
          if (validateDate(value)){
            element.className = "input-form-valid";
            flightToDeploy.flightArrivalDate = value;
            return true;
          } else {
            element.className = "input-form-invalid";
            return false;
          }
        case "flightArrivalTime":
          if (validateFlightTime(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightToDeploy.flightArrivalTime = value;
            return true;
          } else {
            element.setCustomValidity('Format must be HH:MM');
            element.className = "input-form-invalid";
            return false;
          }
        case "airlineType":
          if (validateAirlineType(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightToDeploy.airlineType = value;
            return true;
          } else {
            element.setCustomValidity('Must be either 0 or 1');
            element.className = "input-form-invalid";
            return false;
          }
        case "updateFlightID":
          if (validateFlightID(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightToUpdate.flightID = value;
            return true;
          } else {
            element.setCustomValidity('This FlightID does not exist');
            element.className = "input-form-invalid";
            return false;
          }
        case "flightActualArrivalDate":
            //For now you can put it to any date
            element.className = "input-form-valid";
            flightToUpdate.flightActualArrivalDate = value;
            return true;
        case "flightActualArrivalTime":
          if (validateFlightTime(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightToUpdate.flightActualArrivalTime = value;
            return true;
          } else {
            element.setCustomValidity('Format must be HH:MM');
            element.className = "input-form-invalid";
            return false;
          }
        default: return false;
      }
}

function newValueKeyPressDev(id) {
    //Skip validation to avoid overriding current displayed error
    if (displayErrorMessage){
      displayErrorMessage = false;
      return;
    }

    var element = document.getElementById(id);
    if (!element.reportValidity()) {
        checkValidityDev(id);
    }
}

function autocompleteFlightID(inp) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("focus", function(e) {
      var a, b, i, val = this.value;
      var arr = Object.keys(flightList);
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { val = "";}
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
        //If the dict does not contain the flight, skip (that means there are no passenger)
        if (!(arr[i] in flightWaitingList) && inp.id != "updateFlightID")
            continue;
        /*check if the item starts with the same letters as the text field value:*/
        if (val == ""){
          nbElements += 1;
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = arr[i];
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
              setDate();
          });
          a.appendChild(b);
        }
        else if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          nbElements += 1;
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
              setDate();
          });
          a.appendChild(b);
        }
        if (nbElements > 9)
          break;
      }
  });
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    var arr = Object.keys(flightList);
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
      //If the dict does not contain the flight, skip (that means there are no passenger)
      if (!(arr[i] in flightWaitingList) && inp.id != "updateFlightID")
            continue;
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        nbElements += 1;
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
            setDate();
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
        if (currentFocus > -1) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      } else if (e.keyCode == 9) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) 
          x.parentNode.removeChild(x);
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x || x.length == 0) return false;
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
    var x = document.getElementById(inp.id+"autocomplete-list")
    if (x && elmnt != x && elmnt != inp) {
      x.parentNode.removeChild(x);
    }
  }
  function setDate(){
    var value = inp.value;
    var date = value.substr(value.length - 10)
    if (inp.id == "updateFlightID"){
      datepickerActualArrivalDate.setDate(date);
    }
    else if (inp.id == "setFlightID"){
      datepickerArrivalDate.setDate(date);
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


// sendTextMessage("+15147466347", "salut");

// sendEmail('awkokoroko@hotmail.com','Test',"This is a test");
function sendEmail(recipient, subject, message) {
  const url = "https://api.sendgrid.com/v3/mail/send";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const data = '{"personalizations": [{"to": [{"email": "' + recipient + '"}]}],\
  "from": {"email": "noreply@instaclaim.com"},\
  "subject": "' + subject + '",\
  "content": [{"type": "text/html", \
  "value": "' + message + '"}]}'

  const options = {
    method: 'post',
    body: data,
    headers: {
      'Authorization': "Bearer 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",
      'Content-Type': 'application/json',
    }
  };

  fetch(proxyurl + url, options)
    .then( res => console.log(res));
}

function fundContract(){
  if(!checkValidityDev("sendAmount")) {
    $("#sendAmount").val('');
    return;  
  } 
  else {
    $("#sendAmount").val('');
    console.log('send ether',sendAmountEther);
    App.transferFunds(sendAmountEther);
  }
}

function withdrawFunds() {
  if(!checkValidityDev("sendAmount")) {
    $("#sendAmount").val('');
    return;  
  } 
  else {
    $("#sendAmount").val('');
    console.log('withdraw ether',sendAmountEther);
    App.withdrawFunds(sendAmountEther);
  }
}


function setFlightTime() {
  var list = ["setFlightID","flightArrivalDate","flightArrivalTime","airlineType"];
  var isValid = true;

  list.forEach(function (id) {
      if(!checkValidityDev(id)) {
          isValid = false;
          $("#"+id).val('');
      }
  });

  if (!isValid){
    return;
  }

  var selectedFlight = flightList[flightToDeploy.flightID];

  //Make sure there is new passengers to update
  if (Object.keys(selectedFlight).length == 0){
    var idElement = document.getElementById("setFlightID");
    idElement.value = "";
    idElement.className = "input-form-invalid";
    idElement.setCustomValidity('There is no new passenger to update');
    displayErrorMessage = true;
    return;
  }

  var flightDate = new Date(selectedFlight[Object.keys(selectedFlight)[0]].flightDate);
  var hour = flightToDeploy.flightArrivalTime.split(':')[0];
  var minute = flightToDeploy.flightArrivalTime.split(':')[1];
  var flightArrivalDateTime = new Date(flightToDeploy.flightArrivalDate);
  flightArrivalDateTime.setHours(hour);
  flightArrivalDateTime.setMinutes(minute);
  
  //Make sure arrival date is after flight date
  if (flightDate > flightArrivalDateTime){
    var dateElement = document.getElementById("flightArrivalDate");
    var timeElement = document.getElementById("flightArrivalTime");
    dateElement.value = "";
    timeElement.value = "";
    dateElement.className = "input-form-invalid";
    timeElement.className = "input-form-invalid";
    timeElement.setCustomValidity('Arrival time must be after flight date');
    displayErrorMessage = true;
    return;
  }

  list.forEach(function (id) {
        $("#"+id).val('');
  });
  
  console.log(flightToDeploy.flightID, flightArrivalDateTime, flightToDeploy.airlineType);
  App.createClaim(flightToDeploy.flightID, flightArrivalDateTime, flightToDeploy.airlineType);
}


function updateFlightStatus() {
  var list = ["updateFlightID","flightActualArrivalDate", "flightActualArrivalTime"];
  var isValid = true;

  list.forEach(function (id) {
      if(!checkValidityDev(id)) {
          isValid = false;
          $("#"+id).val('');
      }
  });

  if (!isValid){
    return;
  }

  var hour = flightToUpdate.flightActualArrivalTime.split(':')[0];
  var minute = flightToUpdate.flightActualArrivalTime.split(':')[1];
  var flightActualArrivalDateTime = new Date(flightToUpdate.flightActualArrivalDate);
  flightActualArrivalDateTime.setHours(hour);
  flightActualArrivalDateTime.setMinutes(minute);
  
  list.forEach(function (id) {
        $("#"+id).val('');
  });

  console.log(flightToUpdate.flightID, flightActualArrivalDateTime);
  App.updateFlight(flightToUpdate.flightID, flightActualArrivalDateTime); 
}

autocompleteFlightID(document.getElementById("setFlightID"));
autocompleteFlightID(document.getElementById("updateFlightID"));