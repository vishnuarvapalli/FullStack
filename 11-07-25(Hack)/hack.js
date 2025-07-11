const questions = [
  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: "Delhi" },
  { q: "Sun rises from?", options: ["West", "East", "North"], answer: "East" },
  { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
  { q: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
  { q: "Which is leap year?", options: ["2011", "2012", "2013"], answer: "2011" },
    { q: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C"], answer: "100°C" },
  { q: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb"], answer: "Au" },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    { q: "Who wrote 'Romeo and Juliet'?", options: ["Mark Twain", "William Shakespeare", "Charles Dickens"], answer: "William Shakespeare" },
  { q: "What is the capital of Japan?", options: ["Tokyo", "Seoul", "Beijing"], answer: "Tokyo" },
    { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron"], answer: "Diamond" },
    { q: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
    { q: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper"], answer: "Avocado" },
    { q: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru"], answer: "Vatican City" },
    { q: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne"], answer: "Canberra" },
    { q: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari"], answer: "Sahara" },
];

let current = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const starsEl = document.getElementById("stars");
const leaderboardEl = document.getElementById("leaderboard");

function loadQuestion() {
  if (current >= questions.length) return showResult();

  resetTimer();

  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${opt}"> ${opt}`;
    optionsEl.appendChild(label);
  });
}

function nextQuestion() {
  clearInterval(timer);

  const selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === questions[current].answer) {
    score++;
  }

  current++;
  loadQuestion();
}

function startTimer() {
  time = 10;
  timerEl.textContent = `Time: ${time}`;
  timer = setInterval(() => {
    time--;
    timerEl.textContent = `Time: ${time}`;
    if (time === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");

  scoreEl.textContent = `${score} / ${questions.length}`;

  
  let stars = "";
  const starCount = Math.round((score / questions.length) * 5);
  for (let i = 0; i < 5; i++) {
    stars += i < starCount ? "⭐" : "☆";
  }
  starsEl.innerHTML = stars;

  updateLeaderboard(score);
}

function updateLeaderboard(newScore) {
  let scores = JSON.parse(localStorage.getItem("quizScores")) || [];
  scores.push(newScore);
  scores.sort((a, b) => b - a);
  scores = scores.slice(0, 5);
  localStorage.setItem("quizScores", JSON.stringify(scores));

  leaderboardEl.innerHTML = scores.map(score => `<li>${score}</li>`).join("");
}

nextBtn.addEventListener("click", nextQuestion);

loadQuestion();
