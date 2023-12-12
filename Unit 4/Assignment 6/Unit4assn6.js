/*    JavaScript 7th Edition
      Unit 4 assn5
      Author: Jacob Thomas
      Date: 11/28/2023
*/

window.addEventListener("load", setupForm);

function setupForm() {
    document.getElementById("photoNum").value = 1;
    document.getElementById("photoHrs").value = 2;
    document.getElementById("makeBook").checked = false;
    document.getElementById("photoRights").checked = false;
    document.getElementById("photoDist").value = 0;
}