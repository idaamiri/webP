let myCount = document.getElementById("new-p");

let count = 0;
function increment() {
  count += 1;
  myCount.innerText = count;
}
increment();
