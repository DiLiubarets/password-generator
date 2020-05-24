// load page listener and function with timer
window.addEventListener('load', (event) => {
  setTimeout(function() {init()}, 200);
});

function init() {

// Assignment Code
  var generateBtn = document.querySelector("#generate");
  var userLength = lengthPrompt();
  // variables for password
  var charset = "";
  var userLowercase;
  var userUppercase;
  var userNumeric;
  var userSpecial;
  charAlerts();

  //  #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    // function that generate a password
    function generatePassword() {
      retVal = "";
      for (var i = 0, n = charset.length; i < userLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    passwordText.value = password;
  }


  // function at least one character type should be selected
  function charAlerts() {
    userLowercase = lowercaseConfirm();
    userUppercase = uppercaseConfirm();
    userNumeric = numericConfirm();
    userSpecial = specialConfirm();

    if (!userLowercase && !userUppercase && !userNumeric && !userSpecial) {
      alert("At least one character type must be selected");
      charAlerts();
    }
  }
//  functions that meet password criteria
  function lengthPrompt() {
    var length = prompt("Password length between 8 and 128");
    //validation
    if (length < 8 || length > 128 || !isNormalInteger(length)) {
      lengthPrompt();
    }
    return length;
  }

  function lowercaseConfirm() {
    var lowercase = confirm("Use lowercase?");
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    return lowercase;
  }

  function uppercaseConfirm() {
    var uppercase = confirm("Use uppercase?");
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return uppercase;
  }

  function numericConfirm() {
    var numeric = confirm("Use numeric?");
    if (numeric) {
      charset += "0123456789";
    }
    return numeric;
  }

  function specialConfirm() {
    var special = confirm("Use special characters?");
    if (special) {
      charset += "!@#$%^&*()";
    }
    return special;
  }
  function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  }
  // Event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}