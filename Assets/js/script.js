// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};


function generatePassword() {
  var passwordChar = "";

  var length = prompt("Enter a number between 8 and 128 to set your password length.");

  var lowercase = confirm("Do you wish to use lowercase letters?");
  if (lowercase) { passwordChar += characters.lowercase }

  var uppercase = confirm("Do you wish to use uppercase letters?");
  if (uppercase) { passwordChar += characters.uppercase }

  var numeric = confirm("Do you wish to use numbers?");
  if(numeric){passwordChar += characters.number}

  var special = confirm("Do you wish to use special symbols?");
  if(special){passwordChar += characters.special}

  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  return password;
}

console.log(password);

// Write password to the #password input


function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// function promptBtn(){
//   var length;
//   var uppercase;
//   var lowercase;
//   var special;
// }

