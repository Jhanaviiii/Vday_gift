const scenes = document.querySelectorAll(".scene");
let current = 0;

function showNextScene() {
  scenes[current].classList.remove("active");
  current++;
  if (current >= scenes.length) return;
  scenes[current].classList.add("active");
}

setInterval(showNextScene, 8000);


// YOU animation cycle (scene 1)
const youFrames = [
  "assets/you_idle.png",
  "assets/you_bounce.png",
  "assets/you_spin.png",
  "assets/you_jump.png"
];

let frameIndex = 0;
const youImg = document.getElementById("you");

setInterval(() => {
  if (youImg) {
    youImg.src = youFrames[frameIndex];
    frameIndex = (frameIndex + 1) % youFrames.length;
  }
}, 500);


// HIM laugh loop (scene 1)
const himFrames = [
  "assets/him_beanie_idle.png",
  "assets/him_beanie_laugh.png"
];

let himIndex = 0;
const himImg = document.getElementById("him");

setInterval(() => {
  if (himImg) {
    himImg.src = himFrames[himIndex];
    himIndex = (himIndex + 1) % himFrames.length;
  }
}, 900);
