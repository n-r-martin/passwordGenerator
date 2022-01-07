// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('generate button clicked');

  let passwordLength = document.querySelector("#characterCountSlider").value;
  var password = generatePassword(passwordLength);

    function generatePassword(length) {
      let result = ' ';
      const characters ='abcdefghijklmnopqrstuvwxyz';
      const uppercaseCharacters = characters.toUpperCase();
      const numbers = '01234567890';
      const specialChar = '!@#$%^&*';

      // let availableCharacters = [characters, uppercaseCharacters, numbers, specialChar];

      let availableCharacters = [];

      const lowercaseChecked = document.getElementById('lowercase-toggle').checked;
      const uppercaseChecked = document.getElementById('uppercase-toggle').checked;
      const numbersChecked = document.getElementById('numbers-toggle').checked;
      const specCharChecked = document.getElementById('special-char-toggle').checked;

        if (lowercaseChecked == true){ //checked
          availableCharacters.push(characters);
        } 

        if (uppercaseChecked == true){ //checked
          availableCharacters.push(uppercaseCharacters);
        } 

        if (numbersChecked == true){ //checked
          availableCharacters.push(numbers);
        } 

        if (specCharChecked == true){ //checked
          availableCharacters.push(specialChar);
        } 
      
      console.log(availableCharacters);
      let generatorInput = availableCharacters.join("");
      const charactersLength = generatorInput.length;

      for ( let i = 0; i < length; i++ ) {
          result += generatorInput.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

console.log(`Password successfully generated: ${generatePassword(passwordLength)}`);

let passwordText = document.querySelector("#password");
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
