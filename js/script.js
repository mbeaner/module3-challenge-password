// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Define variables that will make up character for password
var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacter = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', '}', '}', '|', '<', '>', ',', '.', '?']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var charArr = []

//Creating a funtion that will generate a password
function generatePassword() {
  //Array that will hold all possible charaters from the choices the use sellects
  charArr = [];

  //Prompt to select password length
  passwordLength = parseInt(prompt("Chose your password length. Must have a minimum of 8 characters and be no longer than 128 characters. "));
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert('Password length: ' + passwordLength);
  } else {
    return;
  }
  //Confirm if you want upper case letters
  if (confirm('Do you want to use upper case characters?')) {
    charArr = charArr.concat(upperC);
  }
  //Confirm if you want lower case letters
  if (confirm('Do you want to use lower case characters?')) {
    charArr = charArr.concat(lowerC);
  }
  //Confirm if you want special charaters
  if (confirm('Do you want to use special characters?')) {
    charArr = charArr.concat(specialCharacter);
  }
  //Confirm if you want numbers
  if (confirm('Do you want to use numbers?')) {
    charArr = charArr.concat(numbers);
  }
  //Select random characters for your password length
  var passphrase = '';
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * charArr.length);
    passphrase = passphrase + charArr[index];
  }
  return passphrase;

}