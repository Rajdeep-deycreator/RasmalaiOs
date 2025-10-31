alert("click on the heart")

var counter=0
function load(a) {
  var innner=document.getElementById("innerloader")
  var heart=document.getElementById("heart")
  var width=a*33.33
  innner.style.width=width+'%'
  if(a===1){
    heart.style.opacity=1
  }else if( a===2 ){
    heart.style.opacity=0.5
  } else if (a===3) {
    heart.style.opacity=0
    heart.remove()
    var img=document.createElement('img')
    img.src="/photo/IMG-20250817-WA0028.jpg"
    img.style.height="300px";
  
    img.style.position="fixed";
    img.style.top="30%";
    img.style.left="35%";
    

    img.style.animation=" beating 1s infinite alternate";
    document.body.appendChild(img)
    document.getElementById('mincon').style.animation= "rise 10s forwards";
    
    setTimeout(function () {
      img.style.animation="remove 2s forwards"
      var t=document.getElementById("text")
      t.style.animation="pageup 5s forwards"
    },9000) 
  }
}
document.getElementById('heart').addEventListener("click", function (){
  counter = counter+1
  load(counter)
  
}
)
