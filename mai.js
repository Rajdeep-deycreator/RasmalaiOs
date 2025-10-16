document.getElementById("lockScreen").addEventListener("click", () => {
 document.getElementById('lockScreen').style.animation='aniunlock 2s ease-out forwards'
 setTimeout(function () {
   window.location.href="lock.html"
 },100)

   
 
});
