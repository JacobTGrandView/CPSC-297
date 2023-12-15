"use strict"
/*    JavaScript 7th Edition
      charlmt.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string
   warningBox.innerHTML = "";

   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);

   try {
      if (charCount > MAX_REVIEW) {
         throw new Error("You have exceeded the character count limit");
      }

      wordCountBox.innerHTML = charCount;

   } catch(error) {
      warningBox.innerHTML = error.message;
   }
}


/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   let commentRegExp = /\s/g;
   let chars = textStr.replace(commentRegExp, "");
   return chars.length;
}