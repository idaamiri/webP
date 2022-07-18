// comments are just with slash
console.log("ida");
console.log(2 + 3);

let girlsName = "martina";
girlsName = "sara";
girlsName = "fateme";
console.log(girlsName);

const boyName = "amir";
//boyName = "ali"; const never changes
console.log(boyName);

let age = 32;

//types: string and number
// bool and undefined and null

let admin = true;
console.log(admin);

let myName = null;
console.log(myName);

console.log(typeof myName);
console.log(typeof boyName);
console.log(typeof admin);
console.log(typeof age);

let fName;
console.log(fName);

let student = {
  name: "ali",
  age: 35,
  job: "asshole",
};
console.log(student);
console.log(student["job"]);
console.log(student.age);

let emploees = ["mahmood", "hamed"];
console.log(emploees);
console.log(emploees[0]);
emploees[2] = "amirhossein";
emploees[0] = "andy";
emploees[3] = "56";
emploees[4] = "true";
console.log(emploees);
console.log(emploees.length);

function greet(foroshande, kharidar) {
  let car = "BMW";
  console.log(car);
  console.log(kharidar + " is is buying a " + car);
}
greet("client", "ali");

function square(number) {
  return Number * Number;
}
let newCalc = square(4);
console.log(newCalc);

function person1(input) {
  return input;
}
let max1 = person1(3);
console.log(max1);

function newDoc(esm) {
  return "hi " + esm + " !";
}
let newDoc1 = newDoc("Alireza");
let newDoc2 = newDoc("Mohsen");
let newDoc3 = newDoc1 + "" + newDoc2;
console.log(newDoc1);
console.log(newDoc3);

function shout(Fire) {
  return Fire + Fire;
}
let newDoc4 = shout("Fire");
console.log(newDoc4);

function out(Tire) {
  return Tire;
}
let newDoc5 = shout("Tire");
console.log(newDoc5);

function math1(Eyes) {
  let result1 = Eyes + Eyes;
  console.log(result1);
  return result1;
}

let m1 = 10;
let m2 = 5;
console.log(m1 + m2);

let m3 = 10;
let m4 = 5;
console.log(m1 - m2);

let m5 = 10;
let m6 = 5;
console.log(m5 / m6);

let m7 = 10;
let m8 = 5;
console.log(m7 * m8);

// reminder baqimande
let m9 = 10;
let m10 = 3;
console.log(m9 % m10);

let m11 = 10;
let m12 = 5;
console.log(m11 ** m12);
console.log(m11++);
// ++ changes our amounnt of variable with 1 unit
console.log(++m11);
console.log(m11);
console.log(--m11);
console.log(m11);

let c = 10;
let c1 = 3;
c = c + c1;
console.log(c);
// or
let nn = 4;
let mm = 5;
nn += mm; // x=x+y
nn *= mm; // x=x*y
console.log(nn);

let amount1 = 1;
let amount2 = "1";
console.log(amount1 > 1);
console.log(amount1 >= 1);
console.log(amount1 < 1);
console.log(amount1 == 1); //not for type 
console.log(amount1 != 1);
console.log(amount2 === 1); //for type
console.log(amount2 !== 1); //for type




