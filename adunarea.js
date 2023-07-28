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

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  if(num1.textContent && (num1.textContent > randomNumber)){
return randomNumber
  }

  return randomNumber;
  
}
export  function addResult() {
  if (
    parseFloat(imputEl.value) ===
    parseFloat(num1.textContent) + parseFloat(num2.textContent)
  ) {
    resultadosArr.unshift(
      `👍 ${num1.textContent} + ${num2.textContent} = ${imputEl.value} ✔️`
    );
    render(resultadosArr);
    newExercise();
  } else {
    
    render(resultadosArr);
    newExercise();
  }
}

 function newExercise() {
  num1.innerText = getRandomCard();
  num2.innerText = getRandomCard();
  imputEl.value = "";
}
num1.innerText = getRandomCard();
num2.innerText = getRandomCard();
// btnEl.addEventListener("click", addResult)