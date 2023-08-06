const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");
const navLinks = document.querySelectorAll("ul li a"); // Get all navigation links

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close burger menu when a navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Get the navigation element
const navElement = document.querySelector('nav');

// Function to toggle the sticky class based on scroll position
function toggleStickyNav() {
  if (window.scrollY > navElement.offsetTop) {
    navElement.classList.add('sticky');
  } else {
    navElement.classList.remove('sticky');
  }
}

// Add a scroll event listener to toggle sticky navigation
window.addEventListener('scroll', toggleStickyNav);



// const menuIcon = document.querySelector(".menu-icon");
// const navList = document.querySelector("ul");

// menuIcon.addEventListener('click', () => {
//   menuIcon.classList.toggle("active");
//   navList.classList.toggle("active");
// });

// // Get the navigation element
// const navElement = document.querySelector('nav');

// // Function to toggle the sticky class based on scroll position
// function toggleStickyNav() {
//   if (window.scrollY > navElement.offsetTop) {
//     navElement.classList.add('sticky');
//   } else {
//     navElement.classList.remove('sticky');
//   }
// }

// Add event listener to detect scrolling and call the toggleStickyNav function
window.addEventListener('scroll', toggleStickyNav);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  currentPlayerIndex += n;
  showSlides(slideIndex += n);
  // Ensure the index stays within the valid range of players array
  currentPlayerIndex = (currentPlayerIndex + players.length) % players.length;
  showSlides(currentPlayerIndex + 1); // Show the corresponding slide
  updatePlayerInfo(); // Update player information
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  currentPlayerIndex = n - 1; // Update the current player index
  showSlides(currentPlayerIndex + 1); // Show the corresponding slide
  updatePlayerInfo(); // Update player information
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("playershow");
  if (n > slides.length) { slideIndex = 1 };
  if (n < 1) { slideIndex = slides.length };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}

const players = [
  {
    name: "Messi",
    dateOfBirth: "24/6/1987",
    age: 36,
    currentClub: "Inter Miami",
    country: "Argentina",
    height: "1.70 Meters",
    biography:
      "Lionel Messi an iconic footballer known for his extraordinary talent and numerous records. Rising from FC Barcelona's famed La Masia academy, Messi's mesmerizing skills, countless goals, and individual accolades have cemented his status as one of the greatest players in football history. With a legacy that includes numerous domestic and international titles, he continues to amaze fans and inspire aspiring footballers worldwide.",
  },
  {
    name: "Cristiano Ronaldo",
    dateOfBirth: "5/2/1985",
    age: 38,
    currentClub: "Al-Nassr",
    country: "Portugual",
    height: "1.97 Meters",
    biography: "Cristiano Ronaldo is an iconic footballer renowned for his exceptional talent and numerous achievements. Rising through Sporting Lisbon's youth ranks, Ronaldo's electrifying speed, powerful strikes, and unmatched work ethic have propelled him to the status of one of football's all-time greats. From his time at Manchester United to Real Madrid and Juventus, Ronaldo's relentless pursuit of excellence has earned him numerous domestic league titles, Champions League victories, and individual awards.",
  },

  {
    name: "Kylian Mbappé",
    dateOfBirth: "20/12/1998",
    age: 24,
    currentClub: "Paris Saint-Germain",
    country: "France",
    height: "1.78 Meters",
    biography: "Kylian Mbappé is a prodigious football talent known for his explosive speed and innate scoring ability. Rising through AS Monaco's youth system, Mbappé's breathtaking performances caught the attention of the footballing world. A true sensation, he joined Paris Saint-Germain (PSG), where he continued to shine, winning multiple Ligue 1 titles and domestic cups. With his agility, skill on the ball, and clutch performances, Mbappé has become one of the most exciting young players of his generation.",
  },

  // Add more player objects here for other players
];

// Index to keep track of the currently displayed player
let currentPlayerIndex = 0;

// Function to update player information based on the currentPlayerIndex
function updatePlayerInfo() {
  const player = players[currentPlayerIndex];
  document.getElementById("playerName").textContent = `Name: ${player.name}`;
  document.getElementById("dateOfBirth").textContent = `Date of Birth: ${player.dateOfBirth}`;
  document.getElementById("age").textContent = `Age: ${player.age}`;
  // Add the new player stats here
  document.getElementById("CurrentClub").textContent = `Current Club: ${player.currentClub}`;
  document.getElementById("Country").textContent = `Country: ${player.country}`;
  document.getElementById("Height").textContent = `Height: ${player.height}`;
  // Update the player biography
  document.getElementById("playerBiography").textContent = player.biography;
}

// script.js
const canvas = document.getElementById('offside-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 844; // Set the canvas width (adjust as needed)
canvas.height = 500; // Set the canvas height (adjust as needed)

// Player positions
let attackerX = 100;
let lastDefenderX = canvas.width - 150; // Adjusted the position of the last defender

// Draw the football field
function drawField() {
  ctx.fillStyle = '#4CAF50'; // Green color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the goals
  ctx.fillStyle = '#FFFFFF'; // White color
  ctx.fillRect(0, canvas.height / 3, 10, canvas.height / 3);
  ctx.fillRect(canvas.width - 10, canvas.height / 3, 10, canvas.height / 3);

  // Draw the halfway line
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Draw players and offside line
function drawPlayersAndLine() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the football field
  drawField();

  // Draw the last defender
  ctx.beginPath();
  ctx.arc(lastDefenderX, canvas.height / 2, 10, 0, 2 * Math.PI);
  ctx.fillStyle = '#0000FF'; // Blue color
  ctx.fill();

  // Draw the offside line
  ctx.beginPath();
  ctx.moveTo(lastDefenderX, 0);
  ctx.lineTo(lastDefenderX, canvas.height);
  ctx.strokeStyle = '#FFFF00'; // Yellow color
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw the attacker
  ctx.beginPath();
  ctx.arc(attackerX, canvas.height / 2, 10, 0, 2 * Math.PI);
  ctx.fillStyle = '#FF0000'; // Red color
  ctx.fill();

  // Show text indicating attacker and last defender
  ctx.font = '15px Arial';
  ctx.fillStyle = '#FFFFFF'; // White color
  ctx.fillText('Attacker', attackerX - 30, canvas.height / 2 + 30);
  ctx.fillText('Last Defender', lastDefenderX - 60, canvas.height / 2 + 30);

  // Show text indicating offside line
  ctx.fillText('Offside Line', lastDefenderX + 10, 20);
}

// Update player positions
function updatePositions() {
  attackerX += 1; // Reduced the speed
  lastDefenderX -= 0.2; // Reduced the speed

  if (attackerX > canvas.width || lastDefenderX < 0) {
    attackerX = 100;
    lastDefenderX = canvas.width - 150; // Reset last defender position to the initial value
  }

  drawPlayersAndLine();
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  updatePositions();
}

// Start the animation
animate();

const questions = [
  {
    question: "What Club is Messi in?",
    asnwers: [
      { text: "PSG", correct: false },
      { text: "Inter Miami", correct: true },
      { text: "Arsenal", correct: false },
      { text: "Barcalona", correct: false },
    ]
  },
  {
    question: "Which country won the world cup in 2018?",
    asnwers: [
      { text: "Sinagpore", correct: false },
      { text: "Croatia", correct: false },
      { text: "France", correct: true },
      { text: "Argentina", correct: false },
    ]
  },
  {
    question: "What Country is Cristiano Ronaldo from?",
    asnwers: [
      { text: "Portugual", correct: true },
      { text: "England", correct: false },
      { text: "Brazil", correct: false },
      { text: "France", correct: false },
    ]
  },
  {
    question: "What Club is  Cristiano Ronaldo in?",
    asnwers: [
      { text: "Al-Nassr", correct: true },
      { text: "PSG", correct: false },
      { text: "West Ham", correct: false },
      { text: "Spurs", correct: false },
    ]
  },
  {
    question: "When was the last time Spurs won a throphy",
    asnwers: [
      { text: "1995 FA Cup", correct: false },
      { text: "2010 UEFA Champions League", correct: false },
      { text: "2023 Premier League ", correct: false },
      { text: "2008 EFL Cup", correct: true },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0
  nextButton.innerHTML = "Next";
  showQuestion();
};

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.asnwers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";

}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} Correct!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
  }
})

startQuiz();

// Global variables
let currentPositionIndex = 0;

// Array to store position explanations
const positionExplanations = [
  "Forwards in soccer are mainly responsible for scoring goals and are positioned near the opponent's goal line during the game. They also handle penalty kicks, corner kicks, and kick-offs and draw considerable attention due to their crucial role in the team's scoring efforts.",
  "Midfielders in soccer play a central role, controlling the game's flow and tempo while providing both defensive and offensive support. They excel in passing, dribbling, and creating goal-scoring opportunities through assists and shots.",
  "Defenders in soccer are positioned at the back to protect their team's goal, engage in tackles and blocks, and play a key role in maintaining the team's defensive shape. They are crucial in preventing opponents from scoring and regaining possession for their team.",
  "Goalkeepers in soccer are the final line of defense, using their hands within the penalty area to block shots and prevent goals. They showcase excellent reflexes, communication skills with defenders, and can initiate counter-attacks with accurate throws or kicks."
];

// Function to show the current position explanation
function showPositionExplanation(index) {
  const positionsExpDiv = document.querySelector(".positions-exp");
  positionsExpDiv.textContent = positionExplanations[index];
}

// Function to show the next position explanation
function showNextPositionExplanation() {
  currentPositionIndex = (currentPositionIndex + 1) % positionExplanations.length;
  showPositionExplanation(currentPositionIndex);
}

// Function to show the previous position explanation
function showPrevPositionExplanation() {
  currentPositionIndex = (currentPositionIndex - 1 + positionExplanations.length) % positionExplanations.length;
  showPositionExplanation(currentPositionIndex);
}

// Event listeners for the previous and next buttons
document.querySelector(".button-position-sec .submit:first-child").addEventListener("click", showPrevPositionExplanation);
document.querySelector(".button-position-sec .submit:last-child").addEventListener("click", showNextPositionExplanation);

// Display the initial position explanation on page load
document.addEventListener("DOMContentLoaded", () => {
  showPositionExplanation(currentPositionIndex);
});




















