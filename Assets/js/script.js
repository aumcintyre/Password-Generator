// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};


function generatePassword() {
  var length = prompt("Enter a number between 8 and 128 to set your password length.");
  var passwordChar = ((characters.lowercase + characters.uppercase + characters.number + characters.symbol));
  var password="";
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
