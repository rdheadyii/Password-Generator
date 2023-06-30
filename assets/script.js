// Assignment Code
var generateBtn = document.querySelector("#generate");

// need arrays for password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = ["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];

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
  var passLength = parseInt(prompt("Kindly enter how many characters you want your password to be."));

  if (isNaN(passLength)) {
    alert("Password length must be a number.")

    return null;
  }

  // need alert when password isnt between 8-128 chars
  while (!(passLength > 8 && passLength < 128)) {
    alert("Password length must be between 8-128 characters. Please try again.");

    passLength = parseInt(prompt("Kindly enter how many characters you want your password to be."));
  }

  // need alert to tell how many characters selected
  alert("Your password will be " + passLength + " characters long.");

  function getChars() {
      // need confirm for uppercase
      // if yes add to password array and move to next
      incByUpperCase = confirm("Should Password include uppercase characters?\nSelect 'OK' to allow or 'Cancel' to decline.");

      if(incByUpperCase) {
        newPass = newPass.concat(upperCase)
      }

      // need confirm for lowercase
      // if yes add to password array and move to next
      incByLowerCase = confirm("Should Password include lowercase characters?\nSelect 'OK' to allow or 'Cancel' to decline.");

      if(incByLowerCase) {
        newPass = newPass.concat(lowerCase)
      }

      // need confirm for numeric
      // if yes add to password array and move to next
      incByNumber = confirm("Should Password include number characters?\nSelect 'OK' to allow or 'Cancel' to decline.");

      if(incByNumber) {
        newPass = newPass.concat(number)
      }

      // need confirm for special characters
      // if yes add to password array and move to next
      incBySpecialChar = confirm("Should Password include special characters?\nSelect 'OK' to allow or 'Cancel' to decline.");

      if(incBySpecialChar) {
        newPass = newPass.concat(specialChar)
      }
    }

  getChars()

  while (
    !incByUpperCase &&
    !incByLowerCase &&
    !incByNumber &&
    !incBySpecialChar
  ) {
    alert("Please select at least one criteria to generate password.")

    getChars()
  }

  let passRandom = "";

  for (let index = 0; index < passLength; index++) {
    passRandom = passRandom.concat(newPass[Math.floor(Math.random() * newPass.length)]);
  }

  return passRandom;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== null) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
