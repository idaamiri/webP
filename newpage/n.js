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

function getLastElement(myArr) {
  let newX = myArr.length - 1;
  return myArr[newX];
}
console.log(getLastElement([1, 2]));

function x9() {
  let newArray = [1, 2, 3, 4];
  let mm = newArray.length - 1;
  return newArray[mm];
}
console.log(x9());

function sort(arrays) {
  return arrays.sort();
}
console.log(sort([2, 3, 1]));

function rotate(arrayS) {
  let dd = arrayS.shift();
  arrayS.push(dd);
  return arrayS;
}
console.log(rotate(["a", "b", "c"]));

function add(myArrays, a) {
  myArrays = [1, 2, 3];
  let i1 = myArrays.indexOf(5);
  myArrays.push(a);
  return myArrays;
}
console.log(add([], 5));
//adds an element to the end of an array.
//However, the element should only be added if it is not already in the array.

function add(newArrr, a) {
  let h = newArrr.indexOf(a);
  if (h === -1) {
    newArrr.push(a);
    return newArrr;
  }
}
console.log(add([1, 2], 2));

function concatUp(fArray, sArray) {
  if (fArray.length >= sArray.length) {
    return sArray.concat(fArray);
  } else if (fArray.length === sArray.length) {
    return fArray.concat(sArray);
  } else if (fArray.length < sArray.length) {
    return fArray.concat(sArray);
  }
}
console.log(concatUp([5, 7], [6]));

function halve(newArr) {
  newArr.length / 2;
}
console.log(halve([1, 2, 3, 4]));

//copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

let alphabet = ["a", "b", "c", "d"];
console.log(alphabet.join(" & "));

function myChallenge(firstArray, secondArray) {
  for (let x = 0; x <= firstArray.length; x++) {
    for (let y = 0; y <= secondArray.length; y++) {
      if (firstArray[x] === secondArray[y]) {
        return true;
      } else if (firstArray[x] !== secondArray[y]) {
        return false;
      }
    }
  }
}
console.log(myChallenge([1, 2, 3], [3, 4, 5]));

function myNewChallenge(firstArray, secondArray) {
  let result = false;
  for (let x = 0; x <= firstArray.length; x++) {
    if (secondArray.indexOf(firstArray[x]) !== -1) {
      result = true;
    }
  }
  return result;
}
console.log(myNewChallenge([1, 2, 3], [4, 5, 6]));

//function reverseString() {
//for (let x = 0; x <= 50; x++) {
//console.log(reverseString());

function guzChoz() {
  let an = "";
  for (let x = 1; x <= 1000; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      an += " guzchos ";
    } else if (x % 3 === 0) {
      an += " guz ";
    } else if (x % 5 === 0) {
      an += " chos ";
    } else {
      an += " " + x;
    }
  }
  return an;
}
console.log(guzChoz());

// for (let y = 0; y <= arguments.length; y++) {

function ass() {
  let result = false;
  for (let m = 0; m <= arguments.length; m++) {
    for (let x = 0; [m][0] <= [m][0].length; x++) {
      for (let z = 0; m[1] <= m[1].length; z++) {
        for (let y = 0; m[2] <= m[2].length; z++) {
          if ([z].indexOf([x]) !== -1) {
            result = true;
          } else if ([z].indexOf([x]) !== -1) {
            result = true;
          } else if ([y].indexOf([x]) !== -1) {
            result = true;
          }
        }
      }
    }
  }
  return result;
}
console.log(ass([1, 2, 3], [3, 5, 6], [6, 7, 8]));

function enter() {
  let result = false;
  for (let m = 0; m <= arguments.length; m++) {
    for (let x = 0; x <= [m][0].length; x++) {
      if ([m][1].indexOf([m][x]) !== -1) {
        result = true;
      } else if ([m][2].indexOf([m][x]) !== -1) {
        result = true;
      }
    }
  }
  return result;
}
console.log(enter([1, 2, 3], [3, 5, 6], [6, 7, 8]));

function myNewChallenge(firstArray, secondArray) {
  let result = false;
  for (let x = 0; x <= firstArray.length; x++) {
    if (secondArray.indexOf(firstArray[x]) !== -1) {
      result = true;
    }
  }
  return result;
}
console.log(myNewChallenge([1, 2, 3], [4, 5, 6]));

function harshad(a) {
  a = a.toString();
  z = false;
  let result = 0;
  for (let x = 0; x <= a.length; x++) {
    result += a[x];
  }
  if (a % result === 0) {
    z = true;
  }
  return z;
}
console.log(harshad(21));

function myNewChallenge(firstArray, secondArray) {
  let result = false;
  for (let x = 0; x <= firstArray.length; x++) {
    if (secondArray.indexOf(firstArray[x]) !== -1) {
      result = true;
    }
  }
  return result;
}
console.log(myNewChallenge([1, 2, 3], [4, 5, 6]));

// memory



function num1(b) {
  z = b.toString();
  let a = 0;
  for (let x = 0; x <= z.length; x++) {
    a += parseInt(b[x]);
  }
  b = parseInt(b);
  return a;
}
console.log(num1(21));

function numbers(a) {
  let result = false;
  a = a.toString();
  b = 0;
  for (let x = 0; x <= a.length; a++) {
    b += parseInt(a[x]);
  }
  a = parseInt(a);
  if (a % b === 0) {
    result = true;
  }

  return result;
}
console.log(numbers(51));
