// Create variable for 'Genrate' Button
const generateBtn = document.querySelector("#generate");

// Add event listener to 'Generate' button and run the password functions
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  console.log('generating new password...');

  //Stores value of character count slider from UI into a variable that is used in calculating the generated password length
  let passwordLength = document.querySelector("#characterCountSlider").value;

  //Declaring the variable that will eventually store the generated password and pass it to the DOM as rendered text
  let password = generatePassword(passwordLength);

  // The lion's share of the work... this is where we generate a password of random chracters with help from the UI
  function generatePassword(length) {
      let result = ' ';
      const characters ='abcdefghijklmnopqrstuvwxyz';
      const uppercaseCharacters = characters.toUpperCase();
      const numbers = '01234567890';
      const specialChar = '!@#$%^&*';

      // Setting a static array consisting of the stored strings, which depending on certain conditions, will be individually pushed to the availableCharacters array
      let resourceArray = [characters, uppercaseCharacters, numbers, specialChar];

      // Setting the availableCharacters array will be populated with 1-4 potential strings based on user input via checkboxes every time generatePassword function is run
      let availableCharacters = [];

      // Variables for the checked state of the individual checkboxes from the UI. Will later check if the checked state is still true as set by the default on page load.
      const lowercaseChecked = document.getElementById('lowercase-toggle').checked;
      const uppercaseChecked = document.getElementById('uppercase-toggle').checked;
      const numbersChecked = document.getElementById('numbers-toggle').checked;
      const specCharChecked = document.getElementById('special-char-toggle').checked;

      // Storing the variables in an array that will be looped thorough to populate the availableCharacters array
      let checkboxArray = [lowercaseChecked, uppercaseChecked, numbersChecked, specCharChecked];

      //Here's where the magic happens... very pleased I built this loop with my own brain. I think I'm learning something!
      //Looping through all the checkboxes for as many as there are
      //Then checks if the current checkbox being evaluated is indeed checked
      //If so, it pulls from the static resourceArray whose indexing mirrors that of the checkboxArray
      //It then pushes that stored string to the availableCharacters array, from which the generated password gets it input
      //Lastly, if the checkbox is unchecked, it does not push the stored string to availableChracters and logs it to the console as excluded
      for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i] == true ) {
          availableCharacters.push(resourceArray[i]);  
        } else {
            console.log('Excluded ' + resourceArray[i]);
        }
      }
   
  // Old solution to see if checboxes were checked and push corresponding arrays to availableCharacters array. 
  //Leaving here for reference as it basically the loop above written out manually.
  // if (lowercaseChecked == true){ //checked
  //   availableCharacters.push(characters);
 // } 

// if (uppercaseChecked == true){ //checked
//   availableCharacters.push(uppercaseCharacters);
// } 

// if (numbersChecked == true){ //checked
//   availableCharacters.push(numbers);
// } 

// if (specCharChecked == true){ //checked
//   availableCharacters.push(specialChar);
// } 
      
      
      // Log the current state of the availableChracters array to the console
      console.log(availableCharacters);

      // Concatenate the current distinct strings in the array into a single continuous string without commas
      let generatorInput = availableCharacters.join("");

      // Loop through the concatenated string and select characters at random as many times as 'length' which is set by the UI and passed to the script
      for ( let i = 0; i < length; i++ ) {
          result += generatorInput.charAt(Math.floor(Math.random() * generatorInput.length));
      }

      // Return the randomized string - our final product - back to the function
      return result;
  }

// Log to the console our generated password
console.log(`Password successfully generated: ${generatePassword(passwordLength)}`);

let passwordText = document.querySelector("#password");

// Render to the UI the generated password
passwordText.value = password;

// DONE!!
}


// Function to copy the value of the field to the clipboard
function copyPassword() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value)
   .then(() => {
    alert("Copied the text: " + copyText.value);
   })
   .catch(err => {
     console.log('Something went wrong', err);
   });
}


document.getElementById("copy-button-container").addEventListener('click', copyPassword)