// Assignment Code
var generateBtn = document.querySelector("#generate");

// need arrays for password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar =["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];

// need to define variables
var passLength = "";
var incByUpperCase;
var incByLowerCase;
var incByNumber;
var incBySpecialChar;
let newPass = []

// generate pass function
function generatePassword() {
  // need to generate password length prompt
  var passLength = (prompt("Kindly enter how many characters you want your password to be."));

  // need alert when password isnt between 8-128 chars
  if(passLength < 8 || passLength > 128) {
    alert("Password length must be between 8-128 characters. Please try again.");

    var passLength = (prompt("Kindly enter how many characters you want your password to be."));
  }

  // need alert to tell how many characters selected
  alert("Your password will be " + passLength + " characters long.");

  // need confirm for uppercase
  // if yes add to password array and move to next
  var incByUpperCase = confirm("Should Password include uppercase characters?\n Select 'OK' to allow or 'Cancel' to decline.");

  if(incByUpperCase) {
    newPass = newPass.concat(incByUpperCase)
  }

  // need confirm for lowercase
  // if yes add to password array and move to next
  var incByLowerCase = confirm("Should Password include uppercase characters?\n Select 'OK' to allow or 'Cancel' to decline.");

  if(incByLowerCase) {
    newPass = newPass.concat(incByLowerCase)
  }

  // need confirm for numeric
  // if yes add to password array and move to next
    var incByNumber = confirm("Should Password include uppercase characters?\n Select 'OK' to allow or 'Cancel' to decline.");

  if(incByNumber) {
    newPass = newPass.concat(incByNumber)
  }

  // need confirm for special characters
  // if yes add to password array and move to next
  var incBySpecialChar = confirm("Should Password include uppercase characters?\n Select 'OK' to allow or 'Cancel' to decline.");

  if(incBySpecialChar) {
    newPass = newPass.concat(incBySpecialChar)
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
