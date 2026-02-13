const frames = document.querySelectorAll(".frame");
const finalFrame = document.querySelector(".final-frame");
let current = 0;

function startExperience() {
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play();

  startFrames();
}

function startFrames() {
  setInterval(() => {
    if (current < frames.length) {
      frames[current].classList.remove("active");
      current++;
      if (current < frames.length) {
        frames[current].classList.add("active");
      } else {
        finalFrame.classList.add("active");
      }
    }
  }, 2500);
}
