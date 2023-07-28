import { addResult } from "./adunarea.js";
import { minusResult } from "./scaderea.js";
import { multipResult } from "./inmultire.js";
import { divideResult } from "./ipartire.js";

const divideNavBtn = document.querySelector("#div-btn-nav");
const addNavBtn = document.querySelector("#add-btn-nav");
const btnEl = document.querySelector("#btn-el");
const multNavBtn = document.querySelector("#mult-btn-nav");
const minusNavBtn = document.querySelector("#minus-btn-nav");
const operator = document.querySelector("#operator");
const restartBtn = document.querySelector('#restart-btn')

let buttons = [];

minusNavBtn.addEventListener("click", minus);
multNavBtn.addEventListener("click", multiplic);
addNavBtn.addEventListener("click", plus);
divideNavBtn.addEventListener("click", divide);

function divide() {
  buttons.pop();
  buttons.push("÷");
  operator.innerText = "÷";
  operation();
}

function plus() {
  buttons.pop();
  buttons.push("+");
  operator.innerText = "+";
  operation();
}

function minus() {
  buttons.pop();
  buttons.push("–");
  operator.innerText = "–";
  operation();
}
function multiplic() {
   multipResult();
  buttons.pop();
  buttons.push("×");
  operator.innerText = "×";
}

function operation() {
  let res;
  for (let i = 0; i <= buttons.length; i++) {
    buttons[0];
  }
  if (buttons[0] == "–") {
    res = minusResult();
  } else if (buttons[0] == "×") {
    res = multipResult();
  } else if (buttons[0] == "+") {
    res = addResult();
  } else if (buttons[0] == "÷") {
    res = divideResult();
  }else{
   return
  }
  return res;
}

const reloadLoc = () => {
   location.reload()
}

btnEl.addEventListener("click", operation);
restartBtn.addEventListener('click', reloadLoc)
