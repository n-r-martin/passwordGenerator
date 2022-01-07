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

      // let lowercaseChecked = document.getElementById('lowercase-toggle').checked;
      //   if (lowercaseChecked){ //checked
      //     console.log('is checked');
      //   } else{ //unchecked
      //     console.log('is not checked');
      //   }
      
      let availableCharacters = [characters, uppercaseCharacters, numbers, specialChar];
      let generatorInput = availableCharacters.join();
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
