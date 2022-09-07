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
