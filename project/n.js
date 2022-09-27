const btn = document.querySelector("#myBtn");
const textBtn = document.querySelector("#line");

btn.addEventListener("click", function () {
  textBtn.textContent = "hello";
});

const myBtn = document.querySelector("#myNewBtn");
const p1 = document.querySelector("#paragraph");

myBtn.addEventListener("click", myFunction1);
myBtn.addEventListener("click", myFunction2);

function myFunction1() {
  p1.textContent += " First Error";
}
function myFunction2() {
  p1.textContent += " Second Error";
}

myBtn.addEventListener("mouseover", function () {
  p1.textContent += "mouse overed!";
});
myBtn.addEventListener("mouseout", function () {
  p1.textContent += "mouse out!";
});
