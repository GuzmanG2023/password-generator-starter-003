// Assignment code here

  var lowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var specialSymbols = ["!","@","#","$","%","^","&","*","?"]

// global variables always at the top
// Get references to the #generate element
  var generateBtn = document.getElementById("generate");



// functions are always in the middle

// Write password to the #password input
  function runningForm() {
    var text;
    var passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Password Most Be Greater then 8 And Less then 128?")
    return ""
  }
  var lower =  confirm("Would you like lowercase letters")
  var upper = confirm("Would you like UPPERCASE Letters?")
  var special = confirm("Would you like Special Symbols?")
  var digits = confirm("Would you like Numbers?")

    if (lower === false && upper === false && special === false && digits === false) {
      alert ("Must choose One of these.")

    return ""
  }

    var randomCode = ""  
    var passwordCharacters = [];
    if (lower) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }
    if (upper) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }
    if (special) {
      passwordCharacters = passwordCharacters.concat(specialSymbols)
    }
    if (digits) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
    console.log(passwordCharacters)

    for (var i = 0; i < passwordLength; i++) {
      randomCode = randomCode + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomCode)
    }

  return randomCode;
}



function writePassword() {
  // create a variable to get a callback that is the generated password
  var password = runningForm();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}
// event listeners and function calls are always at the bottom
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
