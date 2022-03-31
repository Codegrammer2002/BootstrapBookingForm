// code to calcualte the cost of the stay.
function changeCost() {
var checkInDate = document.getElementById("date1").value;
var checkOutDate =  document.getElementById("date2").value;
var  date1 = new Date(checkInDate);
var  date2 = new Date(checkOutDate);
var  diffTime = Math.abs(date2 - date1);
var  diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("days").value = diffDays;

// getting the values of days and the no of adult.
// didn't really need to parse the string here as Javascript automatically
// converts string to int for calculation.
var totaldays = document.getElementById("days").value;
var numAdults = document.getElementById("adults").value;

// formula to calculate the exact cost(taken from  the use case.)
var totalSum = 150 * totaldays * numAdults;

// adds vlaue to the cost input tag.
document.getElementById("cost").value = totalSum;

}


function validate(){
// check if fields are empty and then or remove the has error classes.
var bool = validateUsername();
var bool1 = validateFirstname();
var bool2 = validateLastname();
var bool3  = validateContact();
var bool4 = validateFax();
var bool5 = validateEmail();
var bool6 = validateCost();
if(bool && bool1 && bool2 && bool3 && bool4 && bool5 && bool6){
    toastr.success("Form is submitted");
}

}

function validateUsername(){
  var username = document.getElementById("username").value;
  if(username === ""){
   document.getElementById("usernameDiv").classList.add('has-error');
   toastr.error("No username entered");// WARNING:
   console.log("Not validated");
   return false;

  }
  else{
    document.getElementById("usernameDiv").classList.remove('has-error');
    console.log("Validated");
    return true;
  }

}

function validateFirstname(){
 var firstName = document.getElementById("firstName").value;
  if(firstName === ""){
   document.getElementById("firstNameDiv").classList.add('has-error');
   toastr.error("No first name entered");// WARNING:
   console.log("Not validated");
   return false;

  }
  else{
    document.getElementById("firstNameDiv").classList.remove('has-error');
    console.log("Validated");
    return true;
  }

}
function validateLastname(){
  var lastName = document.getElementById("lastName").value;
   if(lastName === ""){
    document.getElementById("lastNameDiv").classList.add('has-error');
    toastr.error("No last name entered");// WARNING:
    console.log("Not validated");
    return false;

   }
   else{
     document.getElementById("lastNameDiv").classList.remove('has-error');
     console.log("Validated");
     return true;
   }

 }


function validateContact(){
 var number = document.getElementById("userNum").value;
 if(number === ""){
   document.getElementById("userNumDiv").classList.add('has-error');
   toastr.error("No contact added");
   console.log("Not validated.");
   return false;
 }
 else{
   document.getElementById("userNumDiv").classList.remove('has-error');
   console.log("validated.")
   return true;
 }
}

function validateFax(){
  var fax = document.getElementById("userFax").value;
  if(fax === ""){
    document.getElementById("userFaxDiv").classList.add('has-error');
    toastr.error("No fax added");
    console.log("Not validated.");
    return false;
  }
  else{
    document.getElementById("userFaxDiv").classList.remove('has-error');
    console.log("validated.")
    return true;
  }
}
function validateEmail(){
  var fax = document.getElementById("userEmail").value;
  if(fax === ""){
    document.getElementById("userEmailDiv").classList.add('has-error');
    toastr.error("No email added");
    console.log("Not validated.");
    return false;
  }
  else{
    document.getElementById("userEmailDiv").classList.remove('has-error');
    console.log("validated.")
    return true;
  }

}
function validateCost(){
  validateDateAndAdult();

  var cost = document.getElementById("cost").value;
  var intcost = parseInt(cost);
  if(intcost <= 0){
    toastr.error("Cost can't be negative or 0.");
    return false;

  }
  else if(cost ===""){
    document.getElementById("costDiv").classList.add('has-error');
    toastr.error("Cost can't be null.");
    console.log("Not validated");
    return false;

  }
  else{
    document.getElementById("costDiv").classList.remove('has-error');
    console.log("Validated");
    return true;
  }
}
function validateDateAndAdult(){
  var adults = document.getElementById("adults").value;
  var intadults = parseInt(adults);
  if(intadults <= 0 || adults ===""){
    toastr.error("Adult's can't be negative nor 0");


  }
  var days = document.getElementById("days").value;
  if(days ===""){
    toastr.error("Days can't be empty!");
  }
}

function popup(){

toastr.info("Form is reset");



}
