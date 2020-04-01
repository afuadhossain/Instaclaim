var flightInfo = { 
flightID : "",
flightTimeDev : ""
};

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
    if (flightTime.match(timeRegex)) 
      return true;
    else
      return false;
}

function checkValidityFlightTime(id) {
    var element = document.getElementById(id);
    var value = element.value;

    if (value.length <= 0) {
        element.setCustomValidity('The entry is required');
        element.className = "input-form-invalid";
        return false;
    }

    switch(id){
        case "setFlightID":
          if (validateFlightID(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightInfo.flightID = value;
            return true;
          } else {
            element.setCustomValidity('This FlightID does not exist');
            element.className = "input-form-invalid";
            return false;
          }
          case "flightTimeDev":
          if (validateFlightTime(value)){
            element.setCustomValidity('');
            element.className = "input-form-valid";
            flightInfo.flightTimeDev = value;
            return true;
          } else {
            element.setCustomValidity('Format must be HH:MM');
            element.className = "input-form-invalid";
            return false;
          }
        default: return false;
      }
}

function newValueKeyPressFlightTime(id) {
    var element = document.getElementById(id);

    if (!element.reportValidity()) {
        checkValidityFlightTime(id);
    }
}

function setFlightTime() {
    var list = ["setFlightID","flightTimeDev"];
    var isValid = true;

    list.forEach(function (id) {
        if(!checkValidityFlightTime(id)) {
            isValid = false;
            $("#"+id).val('');
        }
    });
    
    if (isValid){
        list.forEach(function (id) {
              $("#"+id).val('');
        });
        createContract();
    } 
}

function createContract(){
  
    App.createClaim();

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

autocompleteFlightID(document.getElementById("setFlightID"));