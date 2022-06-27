// ASSIGNMENT CODE
var generateBtn = document.querySelector("#generate");
var passwordLength
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "0123459789"
var specicalCharacters = "!@#$%&*()-_<>?{}/[]~:;"

function generatePassword() {

  var password ="";
  var passwordChar = "";
  var passwordLength = prompt("Password must be bewtween 8-128 characters ");
   passwordLength = parseInt(passwordLength);
    
   if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt("Paswword must have more than 7 and less than 129 characters!"))
    
  }
    else {
      alert("Your pasword will be" + passwordChar + "characters long!");
    
  }
    
      var upperCaseChoice = confirm("Want uppercase letters?");
    
    if (upperCaseChoice) {
      password += upperCaseChoice;

  }

    var lowerCaseChoice = confirm("How about a few lowercase letters?");
    if (lowerCaseChoice) {
      password += lowerCaseChoice;

  }

    var specialCharactersChoice = confirm("Would you like special characters?");
    if (specialCharactersChoice) {
      alert("Your password will contain special characters");
  }
    else {
      alert("Your password will not contain special characters.");
  }

    var numberCharactersChoice = confirm("How about some numbers?")
    if (numberCharactersChoice) {
    alert("Your password will contain numbers!");
  }
    else {
    alert("Your password will not contain number!");
  }
  

  //for loop run thr number of times that user sets length to

  
   
  for (var i = 0; i < passwordLength; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]

  }

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
  
  passwordText.value = password;
  
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
