// Get references to the button and output div
const button = document.getElementById('myButton');
const output = document.getElementById('output');

// Function to change button text and background color
function changeButtonText() {
    // Change the button text
    button.textContent = 'Clicked!';

    // Change the background color of the output div
    output.style.backgroundColor = 'steelblue';

    // Display a message in the output div
    output.textContent = 'You clicked the button';
}

// Add a click event listener to the button
button.addEventListener('click', changeButtonText);