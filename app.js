const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countDown() {
  
}


const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5

mindfullnessAnimation();

function mindfullnessAnimation() {
  text.innerHTML = "吸って...";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "止めて";

    setTimeout(() => {
      text.innerHTML = "吐いて...";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(mindfullnessAnimation, totalTime); 