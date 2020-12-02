const botoncitos = document.getElementsByClassName('myButton');
const inputC = document.getElementById('inputC');
const deleteButton = document.getElementById('delete');
const resultButton = document.getElementById('result');
const symbolButton = document.getElementById('symbol');
const sum = document.getElementsByClassName('inputC');
const stringC = inputC.value;
let elements = document.querySelectorAll(".myButton");
let arrayResult = [];
let total = 0;
let num1 = [];
let num2 = [];

const getValues = () => {

  for (let x = 0; x < elements.length; x++) {
    if (elements[x].value !== 'result' && elements[x].value !== 'ac') {
      elements[x].addEventListener('click', addNumber.bind(null, elements[x].value));
      console.log('numbers', elements[x].value);
    }
  }
}


const deleteFunction = () => {
  arrayResult = arrayResult.slice(0, -1);
  console.log('array en delete', arrayResult);
  inputC.value = arrayResult.join('');
}

const addNumber = (num) => {

  if ((num === '0' || num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9')) {
    let integer = parseInt(num, 10);
    inputC.value += integer;
    arrayResult.push(integer);
  } else if (num == 'symbol') {
    total = arrayToNumber(arrayResult);
    total *= -1;
    inputC.value = total;
    arrayResult = [total];
  } else if (num == 'pow') {
    if (inputC.value === '') {
      total = 0;
      inputC.value = '';
    } else {
      total = arrayToNumber(arrayResult);
      total = Math.pow(total, 2);
      inputC.value = total;
      arrayResult = [total];
    }

  } else if (num == 'root') {
    if (inputC.value === '') {
      total = 0;
      inputC.value = '';
    } else {
      total = arrayToNumber(arrayResult);
      total = Math.sqrt(total);
      inputC.value = total;
      arrayResult = [total];
    }
  } else {
    inputC.value += num;
    arrayResult.push(num);
  }

  console.log('arrayresult en add numbers', arrayResult);
}

//  revisa que los numeros por teclado sean numeros u operadores
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43 && charCode !== 45) {
    return false;
  }
  return true;
}


const resultFunction = () => {
  for (let n = 0; n < arrayResult.length; n++) {
    console.log(arrayResult);
    if (arrayResult[n] == '+') {
      structureResult(n, '+');
      console.log('FUNCIONA');
    } else if (arrayResult[n] == '-') {
      structureResult(n, '-');
    } else if (arrayResult[n] == '&divide;') {
      structureResult(n, '&divide;');
    } else if (arrayResult[n] == 'x') {
      structureResult(n, 'x');
    } else {
      console.log('esta wea no funciona');
    }
  }
}
const structureResult = (indice, operador) => {
  let fin = indice;
  num1 = arrayResult.slice(0, fin);
  num2 = arrayResult.slice(fin + 1, arrayResult.length);
  num1 = arrayToNumber(num1);
  num2 = arrayToNumber(num2);
  switch (operador) {
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case '&divide;':
      total = num1 / num2;
      break;
    case 'x':
      total = num1 * num2;
      break;
    default:
      total = 'algo esta mal';
      break;
  }
  inputC.value = total;
  arrayResult = [total];
}

const arrayToNumber = (array) => {
  let union = array.join('');
  union = parseInt(union);
  console.log('union', union);
  return union;
}


getValues();

resultButton.addEventListener('click', resultFunction);
deleteButton.addEventListener('click', deleteFunction);
