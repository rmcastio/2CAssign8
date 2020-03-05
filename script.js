// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
"use strict";


let form = document.getElementById("preferences-form");
let greeting = document.getElementById("greeting");
let backgroundField = document.getElementById("background-color");
let foregroundField = document.getElementById("foreground-color");
let nameField = document.getElementById("name");
let body = document.querySelector("body");

const sayHi = event => {
    event.preventDefault();
    let name = nameField.value
    greeting.textContent = "Good Morning " + name
    sessionStorage.setItem("name", nameField.value);
}

const changeBackgroundColor = event => {
    event.preventDefault();
    let backColor = backgroundField.value
    body.style.backgroundColor = backColor 
    sessionStorage.setItem("background", backgroundField.value);
    console.log(backColor);
}

const changeForegroundColor = event => {
    event.preventDefault();
    let frontColor = foregroundField.value
    body.style.color = frontColor
    sessionStorage.setItem("Foreground", foregroundField.value);
    console.log(frontColor);
}

form.addEventListener("submit", changeBackgroundColor);
form.addEventListener("submit", changeForegroundColor);
form.addEventListener("submit", sayHi);
