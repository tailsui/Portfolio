const phrases = ["Your Typical Computer Science Student", "Likes to Build Things", "Still Learning"];
let currentIndex = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
  // fade out
  textElement.style.opacity = 0;

setTimeout(() => {
  currentIndex = (currentIndex + 1) % phrases.length;
  textElement.textContent = phrases[currentIndex];
  textElement.style.visibility = 'visible';
  textElement.style.opacity = 1;
}, 1000);

setInterval(changeText, 3000);
