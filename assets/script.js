// Assignment Code
var generateBtn = document.querySelector("#generate");

// need arrays for password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar =["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];

// need to define variables

// need to generate password length prompt

// need alert when password isnt between 8-128 chars

// need alert to tell how many characters selected

// need confirm for lowercase
// if yes add to password array and move to next
// if no moves to next

// need confirm for uppercase
// if yes add to password array and move to next
// if no moves to next

// need confirm for numeric
// if yes add to password array and move to next
// if no moves to next

// need confirm for special characters
// if yes add to password array and move to next
// if no moves to next

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
