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

// false = undefined , null , 0 , "" , NaN
// others are true

function shortcut(a, b) {
  return a.charAt(0) + b.charAt(0);
}

function firstChar(a) {
  let b = a.trim();
  return b.charAt(0);
}

let amount3 = false;
let amount4 = amount3 === true ? "dashbord" : "login";
console.log(amount4);

// logical and or not
console.log(true && true);
console.log(true && true && false);
console.log(false && true);
console.log(false && false);

let productcount = 3;
let productprize = 1000;
let credit = 1500;
let buy = productcount > 0 && credit > productprize;
console.log(buy);

let productcount2 = 3;
let productprize2 = 1000;
let credit2 = 450;
let buy2 = productcount2 > 0 && credit2 > productprize2;
console.log(buy2);

let productcount3 = 3;
let productprize3 = 1000;
let credit3 = 450;
let buy3 = productcount3 > 0 || credit3 > productprize3;
console.log(buy3);

let productcount4 = 3;
let productprize4 = 1000;
let credit4 = 450;
let buy4 = productcount4 > 0 || credit4 > productprize4;
console.log(!buy4);

let miner = 20;
let miner2 = 9;
if (miner == 20) {
  console.log("passed");
} else {
  ("failed");
}

if (true) {
  console.log("yes");
}
if (false) {
  console.log("yes");
}
if (miner + miner2 == 30) {
  console.log("40");
}
if (miner + miner2 == 29) {
  let miner3 = "computer";
  console.log(miner3);
}
let stu1 = 3;
if (stu1 == 2) {
  console.log("yes");
} else {
  console.log("no");
}
let localHour = 15;
if (localHour < 12) {
  console.log("good morning");
} else if (localHour > 12 && localHour < 18) {
  console.log("good afternoon");
} else {
  console.log("good night");
}
let newStu = 50;
if (newStu == 44 || newStu == 33) {
  console.log("yes");
} else if (newStu === "50") {
  console.log("no");
} else {
  console.log("none");
}
let study = "50";
if (study == "44" && newStu === "50") {
  console.log("yes");
} else if (study === "50") {
  console.log("no");
} else {
  console.log("none");
}
let xx = 2;
xx++;
xx++;
xx++;
xx--;
console.log(xx);
if (xx == 4) {
  console.log((xx += 2));
} else {
  console.log((xx -= 3));
}

let newCountry = 3;
switch (newCountry) {
  case 3: {
    console.log("HI");
    break;
  }
  default: {
    console.log("bye");
  }
}

let newTown = "Tehran";
switch (newTown) {
  case "Tehran": {
    console.log("wellcome");
    break;
  }
  case "Karaj": {
    console.log("good");
  }
}
let day = 4;
switch (new Date().getDay()) {
  case 0: {
    console.log("shanbe");
    break;
  }
  case 1: {
    console.log("1shanbe");
    break;
  }
  case 2: {
    console.log("2shanbe");
    break;
  }
  case 3: {
    console.log("3shanbe");
    break;
  }
  case 4: {
    console.log("4shanbe");
    break;
  }
  case 5: {
    console.log("5shanbe");
    break;
  }
  case 6: {
    console.log("jome");
    break;
  }
}

// when 2 choices are true
let newTown0 = "karaj";
switch (newTown0) {
  case "karaj":
  case "tehran":
    console.log("the location of " + newTown0);
    break;
  default: {
    console.log("no location");
  }
}
//iteration must be limited
let newx1 = 2;
let newx2 = 3;
let newx3 = newx1 + newx2;
for (let i = 0; i < 10; i++) {
  console.log(newx3);
}

let j;
for (let j = 0; j < 4; j++) {
  console.log(j);
}

let cc;
for (let cc = 4; cc > 0; cc--) {
  console.log(cc);
}
let newY = 2;
let newZ = 3;
let newS = newY + newZ;

let vv = 1;
while (vv < 5) {
  console.log(vv);
  vv++;
}

let newText1 = 0;
do {
  console.log(newText1);
  newText1++;
} while (newText1 < 5);

let newText2 = 5;
do {
  console.log(newText2);
  newText2--;
} while (newText2 > 0);

let newText4 = new Array("Sara", "Aida", "Parisa", "Sama", "Mina");
console.log(newText4);
console.log(newText4.length);

for (let u = 0; u < newText4.length; u++) {
  console.log(newText4[u]);
}

let txt = "";
let studentClass = { stuFirstName: " Jackob", stuLastName: " Smith", age: 23 };
for (let y in studentClass) {
  txt += studentClass[y];
}
console.log(txt);

let newText3 = ["Ali", "Amin", "Amir", "Mohammad"];
console.log(newText3[1]);
console.log(newText3);
for (s = 0; s < 4; s++) {
  console.log(newText3[s]);
}
let myText = "";
for (let u in newText3) {
  myText += newText3[u];
}
console.log(myText);
