let currentPage = 0;
const slider = document.querySelector(".slider");

function nextPage() {
  currentPage++;
  slider.style.transform = `translateX(-${currentPage * 100}vw)`;
}

function startQuiz() {
  nextPage();
  loadQuestion();
}

const questions = [
  {
    q: "When was our first date?",
    options: ["8th dec", "18th nov", "8th nov", "18th dec"],
    correct: 2
  },
  {
    q: "Who rage baits the other constantly?",
    options: ["you", "me", "both", "no one"],
    correct: 0
  },
  {
    q: "What are we?",
    options: ["toxic", "cute but chaotic", "boring", "just friends"],
    correct: 1
  }
];

let qIndex = 0;

function loadQuestion() {
  const container = document.getElementById("quizContainer");
  const q = questions[qIndex];

  container.innerHTML = `
    <h2>${q.q}</h2>
    ${q.options.map((opt, i) =>
      `<button onclick="checkAnswer(${i})">${opt}</button>`
    ).join("")}
  `;
}

function checkAnswer(selected) {
  if (selected === questions[qIndex].correct) {
    qIndex++;
    if (qIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("popup").classList.remove("hidden");
    }
  } else {
    alert("😠 incorrect.");
  }
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
