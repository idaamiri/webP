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
