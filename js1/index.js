let newX = { name: "Ida", lName: "Amiri", age: 20 };
let stu1 = "";
for (let w in newX) {
  stu1 += " " + newX[w];
}
console.log(stu1);
let newZ = new Array("Australia ", "Canada ", "America ", "Spain ");
let newC = "";
if (newZ == "Australia" || "Germany") {
  for (let z of newZ) {
    newC += "origin: " + z;
  }
}
console.log(newC);
let myNewText = "";
let i = 0;
while (i < 10) {
  myNewText += "The number is " + i + " ";
  i++;
}
console.log(myNewText);
let myNewText1 = "";
for (let o = 0; o < 10; o++) {
  myNewText1 += "The number is " + o + " ";
}
console.log(myNewText1);
let myNewText2 = "";
let f = 0;
do {
  myNewText2 += "Student number : " + f + "";
  f++;
} while (f < 5);
console.log(myNewText2);
let myNewText3 = "";
for (let u = 0; u < 10; u++) {
  if (u == 6) {
    break;
  }
  myNewText3 += "The number is " + u + " ";
}
console.log(myNewText3);
let myNewText4 = "";
for (let x = 0; x < 6; x++) {
  if (x == 3) {
    continue;
  }
  myNewText4 += "The number is " + x + " ";
}
console.log(myNewText4);
console.log(myNewText4);

let myNewText5 = "Aida Amiri";

let myNewText6 = "";
for (let x of myNewText5) {
  myNewText6 += x + " ";
}
console.log(myNewText6);

let myNewText7 = new Array(1, 2, 3);

let myNewText8 = "";
for (let x of myNewText7) {
  myNewText8 += x + " ";
}
console.log(myNewText8);

function toCase(a) {
  return a.toLowerCase() + "-" + a.toUpperCase();
}
let x1 = "Aida Amiri";
console.log(x1);

function shortcut(a, b) {
  return a.charAt(0) + b.charAt(0);
}
let x2 = shortcut("Aida", "Amiri");
console.log(x2);

const x3 = new Set([1, 2, 3, 4, 5, 5, 5, 2]);
console.log(x3);

const x4 = new Set();
x4.add("First class");
x4.add("Economy");
x4.add("Coach");

console.log(x4);

const x5 = new Set(["A", "B", "C"]);
x5.add("D");
x5.add("D");
x5.add("D");
x5.add("D");
x5.add("E");
x5.add("E");
x5.add("E");
console.log(x5);

const x6 = new Set(["student1", "student2", "student3"]);
let x7 = "";

x6.forEach(function (mat) {
  x7 += mat + " is ready ";
});

console.log(x7);

let x8 = "";
for (let x of x6) {
  x8 += x + " is ready ";
}
console.log(x8);

let x9 = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log(x9.values());

let x10 = "";
for (const x of x9.values()) {
  x10 += " number " + x;
}
console.log(x10);

let x11 = "";
for (const x of x9.values())
  x9.forEach(function (data) {
    x11 += " Number " + x;
  });
console.log(x11);

function guz(aa, bb) {
  let a = aa.toLowerCase();
  let b = bb.toLowerCase();
  let c = a.indexOf(b);
  console.log(c);
}
let x12 = "12.3aida";
console.log(parseInt(x12));
console.log(parseFloat(x12));

let x13Array = ["amir", "ahmad", "hosein"];
console.log(x13Array);
console.log(x13Array[1]);

for (let e = 0; e < 3; e++) {
  console.log(x13Array[e]);
}
let x14 = "";
for (let j of x13Array) {
  x14 += j + " is ready ";
}
console.log(x14);

let x15 = new Array("Mia", "Sara", "Karen", "Jane");
console.log(x15.length);
for (let z = 0; z < x15.length; z++) {
  console.log(x15[z]);
}

let x16 = new Array();
x16[0] = "Ana";
x16[1] = "Billie";
x16[2] = "Rita";
x16[3] = "Alexa";
x16[4] = 5;
console.log(x16);
console.log(x16.valueOf());
console.log(x16.toString());
console.log(x16.toLocaleString());

var sCars = "Volvo , BMW , Z4";
var sCars = sCars.split(",");
console.log(sCars);

let x17 = [1, 2];
let x18 = x17.concat(3, 4, 5, 6);
console.log(x17);
console.log(x18);

let x19 = ["red", "green", "blue", "purple"];
console.log(x19.slice(1));
console.log(x19.slice(2));
console.log(x19.slice(3));

console.log(x19.slice(1, 3));

let x20 = new Array();
x20.push("A");
x20.push("B");
x20.push("C");
x20.push("D");
x20.push("E");
x20.push("E");
console.log(x20);

let x21 = [1, 2, 3, 4];
x21.pop();
x21.shift();
x21.unshift("black", "White");
console.log(x21);
// shift unshift adds and deletes at the first of the line
// pop and push adds and deletes at the end of the line
console.log(x21.reverse());
console.log(x21.sort());

let x22 = new Array();
x22[0] = "A";
x22[1] = "B";
x22.push("C");
console.log(x22);

let x23 = { name: "aida", age: 20, job: "Dr" };
console.log(x23.name + " is " + x23.age);

let x24 = [
  { name: "Dayan", age: 22, job: "Cashier" },
  { name: "Reza", age: 32, job: "Cashier" },
  { name: "Nima", age: 25, job: "Cashier" },
  { name: "Sara", age: 43, job: "Cashier" },
  { name: "Daniel", age: 12, job: "Cashier" },
  { name: "Eve", age: 32, job: "Cashier" },
  { name: "Eric", age: 45, job: "Cashier" },
  { name: "Otis", age: 44, job: "Cashier" },
];
console.log(x24[3].age);
console.log(x24[4].name);

console.log(Math.round(2.6));
console.log(Math.round(2.5));
console.log(Math.round(2.3));

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 3));

console.log(Math.sqrt(16));
console.log(Math.sqrt(25));

console.log(Math.abs(-25)); // always positive

console.log(Math.ceil(5.6));
console.log(Math.ceil(5.1));
console.log(Math.ceil(5.5));

console.log(Math.floor(4.1));
console.log(Math.floor(4.7));
console.log(Math.floor(4.5));

console.log(Math.min(23, 41, 22, 1, 56, 78, 125));
console.log(Math.max(23, 41, 22, 1, 56, 78, 125));

console.log(Math.cos(30));
console.log(Math.sin(90));

console.log(Math.random());

console.log(Math.floor(Math.random()) * 100);

let x25 = "Hello World Hello ! ";
console.log(x25.indexOf("World"));
console.log(x25.indexOf("؟"));
console.log(x25.lastIndexOf("Hello"));
console.log(x25.search("!"));
console.log(x25.slice(5));
console.log(x25.substring(5));
console.log(x25.replace("World", "!"));
console.log(x25.toUpperCase("World", "!"));
console.log(x25.toLowerCase("World", "!"));
console.log(x25.trim());
console.log(x25.concat("", "programming"));
console.log(x25.charAt(4));
console.log(x25.split("/"));

let x26 = [" April ", " May ", " June "];
let x27 = [1, 2, 3, 4];
console.log(x26.toString());

console.log(x26.join(" & "));

x26.push(" July ");
console.log(x26);

console.log(x26.pop());
console.log(x26);

console.log(x26.unshift("March"));
console.log(x26);

delete x26[0];
console.log(x26);

console.log(x26.slice(1));

console.log(x26.concat(x27));
console.log(x26.concat(x27, 5));

function x28(x, y) {
  console.log(x + y);
}
x28(3, 5);

function x29(x, y) {
  console.log(Math.floor(x + y));
}
x29(2.23, 1.02);

//let x30;
//x30 = 3;
//let x31;
//x30 = x31;
//console.log(x30);
//console.log(x31);

//let a;
//a = a + 1;
//console.log(a);

function x32() {
  let x33 = [1, 2, 3];
  x34 = [4, 5, 6];
  x35 = [7, 8, 9];
  console.log(x33.concat(x34, x35));
}
x32();

let x36 = ["a", "b", "c"];
let x37 = ["d", "e", "f"];
let x38 = ["g", "h", "i"];
console.log(x36.concat(x37, x38));

let x39 = ["aida", "amiri"];
console.log(x39.concat("", 20));

let x40 = [1, 2, 3];
console.log(x40.concat(4, [5, 6, 7]));

let x41 = [1, 2, 3];
console.log(x40.concat(4, 5, 6, 7));

let x42House = ["230000", "Home", "343000", "Rent", true];
x42House.unshift(" apartments ");
x42House.push(" in America ");
console.log(
  " At this range " +
    x42House[0] +
    " costs: " +
    x42House[1] +
    " and " +
    x42House[2] +
    " costs: " +
    x42House[3] +
    " for " +
    x42House[4] +
    " " +
    x42House[6] +
    x42House[5]
);

let x43 = [1, 2, 3, 4, 5, 6];
console.log(x43.splice(1, 4));

let x44 = "";
let x45 = ["Sara", "Alison", "Lydyia"];
x45.forEach(x46Func);

function x46Func(a, b) {
  x44 += " " + b + " : " + a;
}
console.log(x44);

let x46 = ["First class", "Economy", "Coach"];
let x47 = "";
x46.forEach(x48Func);

function x48Func(a, b) {
  x47 += " kind " + b + " : " + a;
}
console.log(x47);

let x48 = "";
let x49 = [32, 44, 12, 1, 77, 56, 51];
x49.forEach(x50Func);
function x50Func(a) {
  x48 += a + " ";
}
console.log(x48);

let x51 = [0, 1, 2, 3, 4];
x51.forEach(x52Func);
function x52Func(a, b, c) {
  console.log((c[b] = a * 10));
}

function newChallenge() {
  let a = [1, 2, 3, 4, 5, 6, 7];
  let b = [7, 8, 9, 10, 11, 12, 13, 14];
  for (let x = 0; x < a.length; x++) {
    for (let i = 0; i < b.length; i++) {
      if ([x] == [i]) {
        console.log("True");
      } else {
        ("False");
      }
    }
  }
}
newChallenge();
//if (a.valueOf() == b.valueOf) {
//console.log("True");
//} else {
//console.log("False");
//}
//}

//function x49Func(a,b){console.log()}

