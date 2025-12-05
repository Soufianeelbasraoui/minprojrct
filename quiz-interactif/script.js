const questionshtml = [
    {
        question: "What does HTML stand for?",
        options1: "HyperText Markup Language",
        options2: "Hyper Transfer Markup Language",
        options3: "HighText Machine Learning",
        options4: "Hyperlink Text Management Language",
        correct: 0
    },
    {
        question: "Which HTML tag is used to define the title of a document?",
        options1:"<head>",
        options2: "<title>",
        options3:"<meta>",
        options4: "<header>",
        correct: 1
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options1: "<link>",
        options2: "<href>",
        options3: "<a>",
        options4: "<hyperlink>",
        correct: 2
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options1: "<break>",
        options2: "<lb>",
        options3: "<br>",
        options4: "<newline>",
        correct: 2
    },
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;
document.getElementById("totalQ").textContent = questionshtml.length;

// AFFICHER QUESTION
const afficherQuestions = () => {
    let question = questionshtml[currentQuestion];

    document.getElementById("questionNumber").textContent = currentQuestion + 1;
    document.getElementById("currentQ").textContent = currentQuestion + 1;
    document.getElementById("questionText").textContent = question.question;

    let progres = ((currentQuestion + 1) / questionshtml.length) * 100;
    document.getElementById("progressFill").style.width = progres + "%";

    let optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";
    selectedOption = null;

    let options = [
        question.options1,
        question.options2,
        question.options3,
        question.options4
    ];

    options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
};

// SELECTION
function selectOption(index, element) {
    selectedOption = index;

    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");
}

//REPONSE
document.getElementById("submitBtn").onclick = () => {
    if (selectedOption === null) {
        alert("Please select an option first!");
        return;
    }
    if (selectedOption === questionshtml[currentQuestion].correct) {
        score++;
    }
    nextQuestion();
};
// SKIP QUESTION
document.getElementById("skipBtn").onclick = (e) => {
    e.preventDefault();
    nextQuestion();
};

// PASSER À LA QUESTION SUIVANTE
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questionshtml.length) {
        endQuiz();
    } else {
        afficherQuestions();
    }
}

// FIN DU QUIZ
/*
function endQuiz() {
    document.querySelector(".quiz-container").innerHTML =
        `<h1>Quiz Completed!</h1>
         <h2>Your Score: ${score} / ${questionshtml.length}</h2>`;
}*/

// LANCER LE QUIZ
afficherQuestions();
