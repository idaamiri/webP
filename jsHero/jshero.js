//function list(myNewAr) {
//  let m = "";
//  //myNewAr = ["Huey", "Dewey"];
//   myNewAr.join(",");
//  myNewAr.push("and Louie");
//  return m.concat(myNewAr);
// }
//console.log(list());

//'Huey, Dewey and Louie'.

function list(myNewAr) {
  myNewAr.join(",");
  let m = "and Louie";
  let h = myNewAr.concat(m);
  return h.toString();
}
console.log(list(["Huey", "Dewey"]));

function secondIndexOf(a, b) {
  let m1 = a.indexOf(b);
  return a.indexOf(b, m1 + 1);
}
console.log(secondIndexOf("White Rabbit", "it"));

function firstWord(str) {
  let g = str.indexOf(" ");
  return str.substr(0, g);
}
console.log(firstWord("see and stop"));

//function normalize(a) {
//  let y = a.indexOf("-");
//a.substr(0);
//let m = a.indexOf(y, y + 1);
//y.replace("/");
//return a;
//}
//console.log(normalize("20-05-2017"));

function newIndexOfIgnoreCase(a, b) {
  let s = a.toLowerCase();
  let g = b.toLowerCase();
  return s.indexOf(g);
}

console.log(newIndexOfIgnoreCase("bit", "It"));

function secondIndexOf(a, b) {
  let m = a.indexOf(b);
  let s = a.indexOf(b, m + 1);
  return s;
}
console.log(secondIndexOf("White Rabbit", "it"));

//10

function normalize(txt) {
  let a = txt.indexOf("-");
  txt.substr(0, a);
  txt.replace(a, "/");
  return txt;
}
console.log(normalize("20-05-2017"));

function add(array1, b) {
  let m = array1.indexOf(b);
  if (m === -1) {
    array1.push(b);
  }

  return array1;
}
console.log(add([1, 2], 3));

// that adds an element to the end of an array.
// However, the element should only be added if it is not already in the array.

let abcd = ["a", "b", "c", "d"];
console.log(abcd.slice(0, 2));
console.log(abcd.slice(1, 3));

function myOddNum() {
  myArr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0) {
      console.log(myArr[i]);
    }
  }
}
myOddNum();

function halve(newArr) {
  if (newArr.length % 2 === 1) {
    return newArr.slice(0, newArr.length / 2 + 1);
  } else if (newArr.length % 2 === 0) {
    return newArr.slice(0, newArr.length / 2);
  }
}
console.log(halve([1, 2, 3, 4]));

//copies the first half of an array. With an odd
// number of array elements, the middle element should belong to the first half.

function list(array1) {
  array1.join(",");
  return array1;
}
console.log(list(["Huey", "Dewey", "Louie"]));

let teams = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(teams[0][1]);

function flat(ii) {
  let a = [4, 9, 2];
  let b = [3, 5, 7];
  let c = [8, 1, 6];
  return [a, b, c];
}
console.log(flat());
//[4, 9, 2, 3, 5, 7, 8, 1, 6]

function newFlat(newA) {
  let m = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ];
  return m;
}
console.log(newFlat());

function median(newArray) {
  if (newArray.length % 2 === 1) {
    let h = (newArray.length - 1) / 2;
    return;
  }
}
console.log(median([1, 2, 10]));

function hello(iii) {
  if (iii === undefined) {
    return "Hello world!";
  } else {
    return "Hello " + iii + "!";
  }
}
console.log(hello("Nala"));

function cutComment(hi) {
  let h = hi.indexOf(" ", 9);
  if (h === -1) {
    return null;
  } else if (h !== -1) {
    return hi.substr(h).trim();
  }
}
console.log(cutComment("let foo; // bar"));

function addTo(a) {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
    sum = sum + i;
  }
  if (a === 1) {
    return a;
  }
  return sum;
}
console.log(addTo(3));

function factorial(n) {
  let m = 1;
  for (let i = 1; i <= n; i++) {
    m *= i;
  }
  return m;
}
console.log(factorial(3));

function newFactorial(a) {
  let result = 0;
  for (let m = 0; m <= a; m++) {
    result *= m;
  }
  return result;
}
console.log(newFactorial(3));
