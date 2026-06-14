const questions = [

{
question:"Which language is used for web pages?",
options:[
"Python",
"Java",
"HTML",
"C++"
],
answer:"HTML"
},

{
question:"Which company developed Java?",
options:[
"Microsoft",
"Sun Microsystems",
"Google",
"Apple"
],
answer:"Sun Microsystems"
},

{
question:"What does CSS stand for?",
options:[
"Computer Style Sheets",
"Cascading Style Sheets",
"Creative Style Sheets",
"Colorful Style Sheets"
],
answer:"Cascading Style Sheets"
},

{
question:"Which symbol is used for comments in JavaScript?",
options:[
"//",
"##",
"<!-- -->",
"**"
],
answer:"//"
}

];

let currentQuestion = 0;
let score = 0;

const questionElement =
document.getElementById("question");

const optionsElement =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

let q = questions[currentQuestion];

questionElement.innerHTML =
q.question;

optionsElement.innerHTML = "";

q.options.forEach(option => {

const button =
document.createElement("button");

button.innerHTML = option;

button.classList.add("option");

button.onclick = () =>
selectAnswer(button, option);

optionsElement.appendChild(button);

});

}

function selectAnswer(button, selected){

let correct =
questions[currentQuestion].answer;

let buttons =
document.querySelectorAll(".option");

buttons.forEach(btn =>
btn.disabled = true);

if(selected === correct){

button.classList.add("correct");

score++;

}
else{

button.classList.add("wrong");

buttons.forEach(btn => {

if(btn.innerHTML === correct){

btn.classList.add("correct");

}

});

}

}

nextBtn.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}
else{

showResult();

}

});

function showResult(){

document.getElementById("quiz-box")
.style.display = "none";

document.getElementById("result-box")
.classList.remove("hidden");

document.getElementById("score")
.innerHTML =
"Your Score: " +
score +
" / " +
questions.length;

}

function restartQuiz(){

location.reload();

}

loadQuestion();