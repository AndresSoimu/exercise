const num1 = document.getElementById("num1-el");
const num2 = document.querySelector("#num2-el");
const imputEl = document.querySelector("#imput-el");
const resultados = document.querySelector("#resultados");

const resultadosArr = [];

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>${leads[i]}</li>`;
  }
  resultados.innerHTML = listItems;
}
let number1
let number2


let getFirstCard = function() {
  let randomNumber = (Math.floor(Math.random() * 10) + 1);
 return randomNumber
}

let getSecondCard = function() {
   let randomNumber1 =  Math.floor(Math.random() * 10) + 1
  return randomNumber1 ;
}


function newExercise() {
   number1 = getFirstCard()
   number2 = getSecondCard()

   firstNumber()
   secondNumber();
   imputEl.value = "";
}


function secondNumber(){
   let numberTu =  number2
   num2.innerText = numberTu
   return numberTu

}

function firstNumber(){
   let number = number2 * number1
   num1.innerText = number
   return number
}



// btnEl.addEventListener("click", divideResult);




export function divideResult() {
  if (
    parseFloat(imputEl.value) ==
    parseFloat(num1.textContent) / parseFloat(num2.textContent)
  ) {
    resultadosArr.unshift(
      `👍 ${num1.textContent} ÷ ${num2.textContent} = ${imputEl.value} ✔️`
    );
    render(resultadosArr);
    newExercise();
  } else {
    render(resultadosArr);
    newExercise();
  }
}