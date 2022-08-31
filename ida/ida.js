let x1 = 3;
let x2 = x1 + 2;
console.log(x2);

let x3 = 77;
x3++;
x3++;
console.log(x3);

let x4 = 3;
x4 += 2;
console.log(x4);

let x5 = 8;
x5 -= 5;
console.log(x5);

let x6 = 3;
x6 *= 4;
console.log(x6);

let x7 = 8;
x7 /= 4;
console.log(x7);

let x8 = 'hhhhh "edefe " rferge';
console.log(x8);

let x9 = " New " + "Student";
console.log(x9);

let x10 = " welcome ";
x10 += x9;
console.log(x10);

x11 = " is hard ";
x12 = " learning to code ";
x12 += x11;
console.log(x12);

let x13 = " Hello ";
console.log(x13.length);
console.log(x13[0]);
console.log(x13[1]);

let x14 = "jello world";
// x14[0] = "H";
x14 = "Hello world";
console.log(x14);

let x15 = "ham";
let x16 = x15[x15.length - 1];
console.log(x16);

let x17 = "true";
let x18 = x17[x17.length - 4];
console.log(x18);

function cars(myFirstCar, mySecondCar, myThirdCar) {
  let x19 = "";
  x19 +=
    " my new cars are " +
    myFirstCar +
    " and " +
    mySecondCar +
    " and " +
    myThirdCar;
  return x19;
}
console.log(cars("Volvo", "BMW", "Ferari"));
console.log(cars("Z4", "Lexus", "Tesla"));

let x20 = [
  ["Aida", 4],
  ["Sara", 5],
];
console.log(x20[0]);
console.log(x20[1]);

let x21 = [10, 40, 30];
x21[1] = 20;
console.log(x21);

let x22 = [
  [2, 33, 43],
  [51, 98, 93],
  [[41, 22, 90], 81, 15],
];
let x23 = x22[1][2];
console.log(x23);

let x24 = ["Aida", "Jane"];
x24.push(["Sara", "Jackob"]);
console.log(x24);

let x25 = [1, 2, 3];
x25.push(4, 5);
console.log(x25);

let x26 = [
  ["John", 43],
  ["Max", 17],
];
x26.push(["David", 74]);
console.log(x26);

//Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string.
//If the search string does not occur twice, -1 should be returned.

//Example: secondIndexOf('White Rabbit', 'it') should return 10.

//function secondIndexOf(a,b){}

let x27 = [1, 2, 3];
x27.pop();
console.log(x27);

let x28 = [1, 2, 3];
x28.shift();
console.log(x28);

let x29 = [
  ["aida", 20],
  ["honey", 47],
];
x29.shift();
console.log(x29);

let x30 = ["a", "b", "c"];
x30.unshift("d");
console.log(x30);

let x31 = [
  ["max", 23],
  ["Jade", 22],
];
x31.shift();
x31.unshift("Mike", 20);
console.log(x31);

function x32() {
  console.log("hello world");
}
x32();

function x33(a, b) {
  console.log(a * b);
}
x33(2, 3);

function x34() {
  var x35 = 5;
  console.log(x35);
}
x34();
//console.log(x35);

function x35() {
  let x36 = 5;
  console.log(x36);
}
x35();
console.log(x35);

var x36 = "T-shirt";
function x37() {
  var x36 = "sweater";
  console.log(x36);
}
x37();
console.log(x36);

let x38 = "skirt";
function x39() {
  let x38 = "pants";
  console.log(x38);
}
x39();
console.log(x38);

function x40(num) {
  return num - 7;
}
console.log(x40(10));

var x41 = 0;

function x42(num) {
  return num * 2 + 3;
}
x41 = x42(5);
console.log(x41);

function x43(a, b) {
  a.push(b);
}

let x44 = [1, 2, 3, 4, 5];

console.log("before " + JSON.stringify(x44));

//function x(s, j) {
//s = [1, 2, 3, 4];
// j = [4, 5, 6, 7];
//  if (s == j) {
//  console.log("yes");
// } else {
//  console.log("no");
// }
//}

function x45(a) {
  if (a) {
    return "yes";
  }
  return "no";
}
console.log(x45(true));

function x46(h) {
  if (h == 12) {
    return "right";
  }
  return "false";
}
console.log(x46(10));

function x46(s) {
  if (s === 4) {
    return "right";
  }
  return "false";
}
console.log(x46("4"));

function x47(a) {
  if (a != 99) {
    return "equal";
  }
  return "not equal";
}
console.log(x47(100));

function x48(a) {
  if (a !== 99) {
    return "equal";
  }
  return "not equal";
}
console.log(x48(66));

function x49(a) {
  let x50 = "";
  switch (a) {
    case 1:
      x50 = "Alpha";
      break;

    case 2:
      x50 = "Beta";
      break;

    case 3:
      x50 = "Omega";
      break;
  }
  return x50;
}
console.log(x49(2));

function x51(val) {
  let answer = "";

  switch (val) {
    case "a":
      answer = "alpha";
      break;
    case "b":
      answer = "beta";
      break;
    case "c":
      answer = "gamma";
      break;
    default:
      answer = "none";
      break;
  }
  return answer;
}
console.log(x51("c"));
console.log(x51("d"));

function add(a, b) {
  return a + b;
}
add(1, 2);

function toFahrenheit(a) {
  return 1.8 * a + 32;
}
console.log(2);

function onesDigit(a) {
  return a % 100;
}
console.log(onesDigit(2674));
