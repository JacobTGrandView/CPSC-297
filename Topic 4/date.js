// date.js

document.addEventListener("DOMContentLoaded", function () {
    const dateValue = document.getElementById("dateValue");

    const currentDate = new Date();
    dateValue.textContent = currentDate.toLocaleDateString();
});