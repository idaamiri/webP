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

function equals(a, b) {
  if (a === b) {
    return "EQUAL";
  }
  if (a !== b) {
    return "UNEQUAL";
  }
}
console.log(equals(1, 2));

function repdigit(a) {
  if (a % 11 === 0) {
    return "Repdigit!";
  }
  return "No Repdigit!";
}
console.log(repdigit(23));

function repdigit(a) {
  let q = a % 10;
  let z = Math.floor(a / 10);
  if (q === z) {
    return "Repdigit!";
  }
  return "No Repdigit!";
}
console.log(repdigit(11));

function addWithSurcharge(a, b) {
  let surcharge = 0;
  if (a <= 10) {
    surcharge += 1;
  } else {
    if (a > 10) {
      surcharge += 2;
    }
  }
  if (b <= 10) {
    surcharge += 1;
  } else {
    if (b > 10) {
      surcharge += 2;
    }
  }
  return surcharge + a + b;
}
console.log(addWithSurcharge(5, 15));

function addWithSurcharge(a, b) {
  let surcharge = 0;
  if (a <= 10) {
    surcharge += 1;
  } else if (a > 10 && a <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }
  if (b <= 10) {
    surcharge += 1;
  } else if (b > 10 && b <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }
  return a + b + surcharge;
}
console.log(addWithSurcharge(10, 30));

function toArray(a, b) {
  return [a, b];
}
console.log(5, 9);

function getFirstElement([a, b]) {
  let lan = [a, b];
  lan[0] = a;
  lan[1] = b;
  return lan[0];
}
console.log(getFirstElement([1, 2]));

function setFirstElement(myNewArr, c) {
  myNewArr[0] = c;
  return myNewArr;
}
console.log(setFirstElement([1, 2], 3));

function myChallenge(firstArray, secondArray) {
  firstArray = [1, 2, 3, 4];
  secondArray = [5, 6, 7, 8];
  for (let x = 0; firstArray.length; x++) {
    for (let y = 0; secondArray.length; y++) {
      if (firstArray[x] in firstArray === secondArray[y] in secondArray) {
        return "yes";
      } else if (
        firstArray[x] in firstArray !== secondArray[y] in secondArray
      ) {
        return "no";
      }
    }
  }
}
console.log(myChallenge());
