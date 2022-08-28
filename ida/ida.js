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
