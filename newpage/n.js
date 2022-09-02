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
