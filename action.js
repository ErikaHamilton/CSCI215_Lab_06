// Erika Hamilton
// Lab 6 Part 2

var email = getElementbyId("email");
var name = getElementbyId("name").split(" ");
var age = getElementbyId("age");


function checkEmail(email) {

  //onkeyPress listener, turn red when < until it is removed

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkName(name) {
  var regEx = new RegExp('>|<');
  for( i in name) {
    if( i == regEx ) {
      //Change background to red,
      alert("An invalid character has been put in.");
    }
    else {
      //name is validated!
    }

  }
}
function checkAge(age) {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$ | .');
  //onkeyPress listener, turn red when . or when age>3digits until it is removed
    for(i in age; age < 100) {
      if( i == RegExp) {
        //turn red
        alert("Please check your age again.");
      }
       else {
         break;
    }
  }
  return (age);
}
function validate(email) {
//onclick listener for the subscribe button
// calls checkEmail
// good email calls myajax, bad calls an alert
  if()//onclick listener = true;)
  {
  clicked = myAjaxFunction(email);
  }
  else {
    alert("Please make sure your information is correct.");
  }
}

function myAjaxFunction(email) {
  alert("AJAX has been made.") // clear input
}
