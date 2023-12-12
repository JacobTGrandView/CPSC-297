/*
    Unit 4 assignment 3
    Author: Jacob Thomas
    Date: 11/28/2023
    Filename: Unit4assn3.js
*/

homeStreet = "1 Main St.";
homeCity = "Sicilia";
homeState = "MA";
homeCode = "02103";
workStreet = "15 Oak Ln.";
workCity = "Central City";
workState = "MA";
workCode = "02104";

// Unit4assn3.js

function updateAddress(type) {
    const streetElement = document.getElementById('street');
    const cityElement = document.getElementById('city');
    const stateElement = document.getElementById('state');
    const codeElement = document.getElementById('code');

    if (type === 'home') {
        streetElement.value = homeStreet;
        cityElement.value = homeCity;
        stateElement.value = homeState;
        codeElement.value = homeCode;
    } else if (type === 'work') {
        streetElement.value = workStreet;
        cityElement.value = workCity;
        stateElement.value = workState;
        codeElement.value = workCode;
    }
}

