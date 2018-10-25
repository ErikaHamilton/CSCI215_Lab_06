// Erika Hamilton
// Lab 6 Part 2
// ----------------------------------------------- Variables
console.clear();
var userEmail;
var name;
var age;
var userEmail = document.getElementById("email");
var name = document.getElementById("name");
var age = document.getElementById("age");
name.onKeydown = checkName(name);
age.onKeydown = checkAge(age);
email.onKeydown = checkEmail(userEmail);

// ----------------------------------------------- Check Email
function checkEmail(userEmail) {
  var emailTrue;
  var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    if(regExp.test(email.value)) {
      document.getElementById("email").style.backgroundColor = "red";
      alert("Please check the email again.");
    }
    else {
      emailTrue = validate(regExp.test(email));
    }
  return emailTrue;
}
// ----------------------------------------------- Check Name
function checkName(name) {
  var regEx = new RegExp('<');
  if(regEx.test(name.value))
  {
    document.getElementById("name").style.backgroundColor = "red";
    alert("An invalid character has been put in.");
    }
  else {
      return name;
    }
  }

// ----------------------------------------------- CheckAge
function checkAge(age) {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$|');
  //onkeyPress listener, turn red when . or when age>3digits until it is removed
    if(regEx.test(age.value) && (age > 100))
      {
      document.getElementById("age").style.backgroundColor = "red";
      alert("Please check your age again.");
      }
     else {
       return age;
    }
  }

// ----------------------------------------------- Validate
function validate(emailTrue) {
  if(emailTrue == True)
  {
    subs = myAjaxFunction(userEmail);
  }
  else {
    alert("Please make sure your information is correct.");
  }
}

// ----------------------------------------------- myAjaxFunction
function myAjaxFunction(userEmail) {
  alert("AJAX has been made.");
  document.getElementById("form").reset(); //clears all input

}
