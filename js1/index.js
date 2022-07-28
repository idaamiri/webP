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