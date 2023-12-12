/*
      Unit 4 Assignment 2
      Celsius <-> Fahrenheit Converter
      Author: Jacob Thomas
      Date: 11/28/2023
      Filename:Unit4assn2.js
*/

function FahrenheitToCelsius(degree) {
    return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
    return (degree * 1.8) + 32;
}

function convertToCelsius() {
    let fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}

function convertToFahrenheit() {
    let cDegree = document.getElementById("cValue").value;
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
}