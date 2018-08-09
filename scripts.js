let a = 0;
let b = 0;
let operand = '';

function read() {
  return document.getElementById('display').value;
}
function write(inputValue) {
  document.getElementById('display').value = inputValue;
}
function substruct() {
  operand = '-';
}
function summ() {
  operand = '+';
}
function divide() {
  operand = '/';
}
function multiply() {
  operand = '*';
}

function getResult() {
  if (operand === '-') {
    write(a - b);
  } else if (operand === '+') {
    write(+a + +b);
  } else if (operand === '*') {
    write(a * b);
  } else if (operand === '/') {
    write(a / b);
  }
}
function toInput(inputValue) {
  if (operand && b === 0) {
    write(inputValue);
    b = inputValue;
  } else if (operand && b !== 0) {
    b = read() + inputValue;
    write(b);
  } else if (read() === '0') {
    write('');
    a = inputValue;
    write(a);
  } else if (read() !== '0') {
    a += inputValue;
    write(a);
  }
}
function initZero() {
  write(0);
  a = 0;
  b = 0;
  operand = '';
}
