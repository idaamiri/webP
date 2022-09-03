let x1 = true || true; //true
console.log(x1);

let x2 = false || false; //false
console.log(x2);

let x3 = true || false; //true
console.log(x3);

let x4 = true && true; //true
console.log(x4);

let x5 = false && false; //false
console.log(x5);

let x6 = true && false; //false
console.log(x6);

function xor(a, b) {
  let x1 = (a || b) && b;
  return x1;
}
console.log(xor(false, true));

function equals(a, b) {
  return a === b;
}
console.log(equals(1, 1));

function equals(a, b, c) {
  let mm = a === b && b === c;
  return mm;
}
console.log(equals(1, 1, 1));

function isEven(a) {
  let c = a % 2;
  return c === 0;
}
console.log(isEven(2));

function unequal(a, b, c) {
  let y = a !== b && a !== c && b !== c;
  return y;
}
console.log(unequal(1, 2, 3));

function isThreeDigit(a) {
  let r = a >= 100 && a < 1000;
  return r;
}
console.log(isThreeDigit(500));
