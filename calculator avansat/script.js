//numerele din html

let num7 = document.querySelector("#digit7");
let num8 = document.querySelector("#digit8");
let num9 = document.querySelector("#digit9");
let num1 = document.querySelector("#digit1");
let num2 = document.querySelector("#digit2");
let num3 = document.querySelector("#digit3");
let num4 = document.querySelector("#digit4");
let num5 = document.querySelector("#digit5");
let num6 = document.querySelector("#digit6");
let num0 = document.querySelector("#digit0");

//functii matematice

let multiply = document.querySelector("#multiply");
let equals = document.querySelector("#equals");
let add = document.querySelector("#add");
let substract = document.querySelector("#substract");
let divide = document.querySelector("#divide");
let clear = document.querySelector("#clear");

//variabile ajutatoare
let checkNumber = false;
let firstNumber = 0;
let secondNumber = null;
let operator = "";
let startBuildingSecondNumber = checkNumber;
let result = 0;
let resultDiv = document.querySelector(".resultDiv");
let numOfSigns = 0;
let lastOp;
let numOfCalcs = 0;

//functii ajutatoare
//creaza primul numar si verifica daca poate crea si al doile numar
function checkWitchNumToWrite() {
  startBuildingSecondNumber = checkNumber;
}

function buildNumber(digit) {
  if (startBuildingSecondNumber == false) {
    firstNumber = firstNumber * 10 + digit;
    resultDiv.innerHTML = firstNumber;
    console.log("build 1 numb");
  } else if (startBuildingSecondNumber == true) {
    secondNumber = 0;
    secondNumber = secondNumber * 10 + digit;
    resultDiv.innerHTML = secondNumber;
    console.log("build 2 numb");
  }
}
function checkNums() {
  if (numOfSigns > 1) {
    switch (lastOp) {
      case "+":
        result = firstNumber + secondNumber;
        firstNumber = 0;
        secondNumber = 0;
        firstNumber = result;
      case "-":
        result = firstNumber - secondNumber;
        firstNumber = 0;
        secondNumber = 0;
        firstNumber = result;
    }
  }
}

//event listenere
//preia inputul pt a crea un numar
num0.addEventListener("click", () => {
  buildNumber(0);
});

num1.addEventListener("click", () => {
  buildNumber(1);
});
num2.addEventListener("click", () => {
  buildNumber(2);
});

num3.addEventListener("click", () => {
  buildNumber(3);
});

num4.addEventListener("click", () => {
  buildNumber(4);
});

num5.addEventListener("click", () => {
  buildNumber(5);
});

num6.addEventListener("click", () => {
  buildNumber(6);
});

num7.addEventListener("click", () => {
  buildNumber(7);
});

num8.addEventListener("click", () => {
  buildNumber(8);
});

num9.addEventListener("click", () => {
  buildNumber(9);
});
//receptioneaza numerele si introdu functiile matematice in calculator si incepe creare urmatorului numar

multiply.addEventListener("click", () => {
  startBuildingSecondNumber = true;
  operator = "*";
  resultDiv.innerHTML = "*";
  numOfSigns++;
  lastOp = operator;
  checkNums();
});
add.addEventListener("click", () => {
  startBuildingSecondNumber = true;
  operator = "+";
  resultDiv.innerHTML = "+";
  numOfSigns++;
  lastOp = operator;
  checkNums();
});
substract.addEventListener("click", () => {
  startBuildingSecondNumber = true;
  operator = "-";
  resultDiv.innerHTML = "-";
  numOfSigns++;
  lastOp = operator;
  checkNums();
});
divide.addEventListener("click", () => {
  startBuildingSecondNumber = true;
  operator = "/";
  resultDiv.innerHTML = "/";
  numOfSigns++;
  lastOp = operator;
  checkNums();
});
//alege functia si arta rezultatul in functie de cazul ales si afiseaza rezultatul

equals.addEventListener("click", () => {
  numOfCalcs++;
  switch (operator) {
    case "*":
      if (numOfCalcs > 1) {
        firstNumber = result;
        result = firstNumber * secondNumber;
        break;
      } else {
        result = firstNumber * secondNumber;
        break;
      }
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      if (secondNumber != 0) {
        if (numOfCalcs > 1) {
          firstNumber = result;
          result = firstNumber / secondNumber;
          break;
        } else {
          result = firstNumber / secondNumber;
          break;
        }
      } else {
        alert(`impartirea la 0 nu are sens`);
      }
      break;
  }
  console.log(`primul numar este ${firstNumber}`);
  console.log(`al doile numar este ${secondNumber}`);
  console.log(`rezultatul este ${result}`);

  numOfSigns = 0;
  checkNumber = false;
  checkWitchNumToWrite();
  if (secondNumber == null) {
    resultDiv.innerHTML = firstNumber;
  }
  resultDiv.innerHTML = result;
});

clear.addEventListener("click", () => {
  {
    resultDiv.innerHTML = "Cleared ";
    checkWitchNumToWrite();
    secondNumber = 0;
    firstNumber = 0;
    numOfSigns = 0;
    numOfCalcs = 0;
  }
});
