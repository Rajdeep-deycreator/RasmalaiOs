alert("enter pin")
var up = [];
const pp=[1,8,0,1]
var tarea = document.getElementById("tarea");

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    if (up.length <= 4) {
      tarea.innerText += "*";
      up.push(i);
    }
  });
}
document.getElementById("back").addEventListener("click", function (){
  tarea.innerText = tarea.innerText.slice(0,-1)
  up.pop()
})
function check() {
  if (up.length === pp.length && up.every((value, index) => value === pp[index])) {
    console.log("correct pin")
    window.location.href="/homeScreen.html"
  } else {
    alert("incorrect pin")
  }
}