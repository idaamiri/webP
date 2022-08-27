document.write("Hi");

function myDay() {
    switch (new Date().getDay()) {
      case 0:
        day = alert("Saturday");
        break;
      case 1:
        day = alert("Sunday");
        break;
      case 2:
        day = alert("Monday");
        break;
      case 3:
        day = alert("Tuesday");
        break;
      case 4:
        day = alert("Wednesday");
        break;
      case 5:
        day = alert("Thursday");
        break;
      case 6:
        day = alert("Friday");
        break;
    }
  }

let x1 = "Aida";
document.write(x1);

let x2 = document.getElementsByTagName("p");
console.log(x2);

//document.getElementsByClassName("ida").style.fontSize = "50px";

function x3() {
  alert("Welcome");
}



function x4(x) {
  alert(x);
}

function myValue() {
  let x5 = document.getElementsByClassName("name")[0].value;
  alert(x5);
  document.getElementsByClassName("name")[0].value = "";
}

function mouseOver() {
  let x6 = (document.getElementById("box").style.background = "red");
}
function mouseOut() {
  let x7 = (document.getElementById("box").style.background = "blue");
}

function mouseDown() {
  let x8 = (document.getElementById("myBox").style.background = "purple");
}
function mouseUp() {
  let x8 = (document.getElementById("myBox").style.background = "black");
}
function myFocus() {
  let x9 = (document.getElementById("ida3").style.background = "black");
}
