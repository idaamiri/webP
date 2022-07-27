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
