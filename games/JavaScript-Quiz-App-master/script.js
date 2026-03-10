const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
{
question: "Which language runs in a web browser?",
answers: [
 { text: "Java", correct: false },
 { text: "C", correct: false },
 { text: "Python", correct: false },
 { text: "JavaScript", correct: true }
]
},

{
question: "What does HTML stand for?",
answers: [
 { text: "Hyper Text Markup Language", correct: true },
 { text: "Home Tool Markup Language", correct: false },
 { text: "Hyperlinks and Text Mark Language", correct: false },
 { text: "Hyper Tool Multi Language", correct: false }
]
},

{
question: "What does CSS stand for?",
answers: [
 { text: "Creative Style Sheets", correct: false },
 { text: "Cascading Style Sheets", correct: true },
 { text: "Computer Style Sheets", correct: false },
 { text: "Colorful Style Sheets", correct: false }
]
},
{
question: "Which company developed JavaScript?",
answers: [
{ text: "Microsoft", correct: false },
{ text: "Netscape", correct: true },
{ text: "Google", correct: false },
{ text: "Apple", correct: false }
]
},

{
question: "Which HTML tag is used for links?",
answers: [
{ text: "<a>", correct: true },
{ text: "<link>", correct: false },
{ text: "<href>", correct: false },
{ text: "<url>", correct: false }
]
},

{
question: "Which symbol is used for comments in JavaScript?",
answers: [
{ text: "//", correct: true },
{ text: "#", correct: false },
{ text: "<!-- -->", correct: false },
{ text: "**", correct: false }
]
},

{
question: "Which CSS property changes background color?",
answers: [
{ text: "color", correct: false },
{ text: "background-color", correct: true },
{ text: "font-color", correct: false },
{ text: "bgcolor", correct: false }
]
},

{
question: "Which HTML tag is used for images?",
answers: [
{ text: "<img>", correct: true },
{ text: "<image>", correct: false },
{ text: "<pic>", correct: false },
{ text: "<src>", correct: false }
]
},

{
question: "Which language is used to style web pages?",
answers: [
{ text: "HTML", correct: false },
{ text: "CSS", correct: true },
{ text: "Python", correct: false },
{ text: "Java", correct: false }
]
},

{
question: "Which HTML tag creates a line break?",
answers: [
{ text: "<break>", correct: false },
{ text: "<lb>", correct: false },
{ text: "<br>", correct: true },
{ text: "<newline>", correct: false }
]
},

{
question: "Which keyword declares a variable in JavaScript?",
answers: [
{ text: "var", correct: true },
{ text: "int", correct: false },
{ text: "string", correct: false },
{ text: "define", correct: false }
]
},

{
question: "Which HTML tag is used for headings?",
answers: [
{ text: "<heading>", correct: false },
{ text: "<h1>", correct: true },
{ text: "<head>", correct: false },
{ text: "<title>", correct: false }
]
},

{
question: "Which company developed the Chrome browser?",
answers: [
{ text: "Microsoft", correct: false },
{ text: "Apple", correct: false },
{ text: "Google", correct: true },
{ text: "Amazon", correct: false }
]
}

]


let played = localStorage.getItem("gamesPlayed");

if(played == null){
played = 0;
}

played = parseInt(played) + 1;

localStorage.setItem("gamesPlayed", played);

window.addEventListener("beforeunload", function(){

let total = localStorage.getItem("totalPlayTime");

if(total == null){
total = 0;
}

let playTime = Math.floor((Date.now() - startTime)/60000);

total = parseInt(total) + playTime;

localStorage.setItem("totalPlayTime", total);

});
let startTime = Date.now();