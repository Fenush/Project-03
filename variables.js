// from menu.js
const menuButtons = ["white", "random", "grid"];
const menuContainer = document.createElement("div");
//from grid.js
const cellContainer = document.createElement("div");
const instructions = document.createElement("div");
let initialWhiteColor = 1;
let cellRow = 16;
let cell, cursorColor;
//from buttons.js
let randomColor, lastColor;
