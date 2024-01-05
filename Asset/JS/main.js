/*=============SHOW MENU====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('menu-button'),
    navClose = document.getElementById('nav-close')

/*==============MENU SHOW=====================*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*==============MENU HIDDEN====================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*===================REMOVE MOBILE MENU=====================*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====================POPUP FORM============================*/


    document.getElementById("showForm").addEventListener('click', function openForm(){
        document.getElementById('myForm').style.display="block";
});
function closeForm() {
    document.getElementById("myForm")
    .style.display="none";
}

/*============================Radio PopUp Form================*/
document.getElementById("showRadioForm").addEventListener('click', function openForm2(){
    document.getElementById('myForm2').style.display="block";
});
function closeForm2() {
    document.getElementById("myForm2")
    .style.display="none";
}

/*=============================pop up quiz==========================*/
function displayQuiz() {
    window.location.href = "quizapp.html";
}

/*===========================Quiz App====================================*/
const questions =[
    {
        question: "Which is the highest mountain in Africa?",
        answers: [
            {text: "Everest", correct: false},
            {text: "Fuji", correct: false},
            {text: "Denali", correct: false},
            {text: "Kilimanjaro", correct: true},
        ]
    },
    {
        question: "What is the name of a baby Kangaroo called?",
        answers: [
            {text: "Lamb", correct: false},
            {text: "Joey", correct: true},
            {text: "Foal", correct: false},
            {text: "Kid", correct: false},
        ]
    },
    {
        question: "What is Usain Bolt's 100m world record Time?",
        answers: [
            {text: "9.58 seconds", correct: true},
            {text: "9.48 secods", correct: false},
            {text: "9.88 seconds", correct: false},
            {text: "9.68 seconds", correct: false},
        ]
    },
    {
        question: "What is the only letter that does not occur on the periodic table?",
        answers: [
            {text: "Q", correct: false},
            {text: "Z", correct: false},
            {text: "D", correct: false},
            {text: "J", correct: true},
        ]
    },
    {
        question: "What is the study of mushrooms called?",
        answers: [
            {text: "Mycology", correct: true},
            {text: "Virology", correct: false},
            {text: "Entomology", correct: false},
            {text: "Botany", correct: false},
        ]
    },
    {
        question: "Which country has the longest coastline in the world?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: true},
            {text: "Spain", correct: false},
            {text: "Peru", correct: false},
        ]
    },
    {
        question: "What is the smallest country in the World?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Cape Verde", correct: false},
            {text: "Eritrea", correct: false},
            {text: "Bangledash", correct: false},
        ]
    },
    {
        question: "Which British computer scientist invented the world wide web?",
        answers: [
            {text: "Kelvin Nkwor", correct: false},
            {text: "Charles Babbage", correct: false},
            {text: "Tim Berner's-Lee", correct: true},
            {text: "Brendan Eich", correct: false},
        ]
    },
    {
        question: "What is the only active volcano on mainland europe called?",
        answers: [
            {text: "Mount Vesuvius", correct: true},
            {text: "Mount Mearpi", correct: false},
            {text: "Mount Damavand", correct: false},
            {text: "Mount Bromo", correct: false},
        ]
    },
    {
        question: "Which company developed the first mobile phone?",
        answers: [
            {text: "Panasonic", correct: false},
            {text: "Sony", correct: false},
            {text: "Samsung", correct: false},
            {text: "Motorola", correct: true},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option__btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
} 

/*=============================Show Score=================================*/
function showScore(){
    resetState();
    questionElement.innerHTML = 'Quiz Completed, You had a total score of ' + score + " out of " + questions.length + ' !';
    nextButton.innerHTML = "play Again";
    nextButton.style.display ='block';
    
                              
}

/*=====================quiz next button=========================================*/
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();