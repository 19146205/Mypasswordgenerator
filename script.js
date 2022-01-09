// Assignment Code
var generateBtn = document.querySelector("#generate");

function createPassword(type, length) {
  var pswd = "";
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * type.length);
    pswd += type.substring(randomNumber, randomNumber + 1);
  }
  return pswd;
}

function generatePassword() {
  var len = prompt("Length of Password?");
  while (len < 8 || len > 128) {
    alert("Password must be atleast 8 and atmost 128 charcaters long");
    len = prompt("Length of Password?");
  }

  var uppercase = prompt("Include Uppercase (0 or 1)");
  while (!(uppercase == 0 || uppercase == 1)) {
    alert("Answer must be 0 or 1");
    uppercase = prompt("Include Uppercase (0 or 1)");
  }
  var lowercase = prompt("Include Lowercase (0 or 1)");
  while (!(lowercase == 0 || lowercase == 1)) {
    alert("Answer must be 0 or 1");
    lowercase = prompt("Include Lowercase (0 or 1)");
  }
  
  var numeric = prompt("Include Numeric (0 or 1)");
  while (!(numeric == 0 || numeric == 1)) {
    alert("Answer must be 0 or 1");
    numeric = prompt("Include Numeric (0 or 1)");
  }    
  var special = prompt("Include Special Charcaters (0 or 1)");
  while (!(special == 0 || special == 1)) {
    alert("Answer must be 0 or 1");
    special = prompt("Include Special Charcaters (0 or 1)");
  }



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
