const scenes = document.querySelectorAll(".scene");
let current = 0;

function showNextScene() {
  scenes[current].classList.remove("active");
  current++;
  if (current >= scenes.length) return;
  scenes[current].classList.add("active");
}

setInterval(showNextScene, 8000);
