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
