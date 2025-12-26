const questions = [
    {
        question: "What is the color of banana?",
        answers: [
            { text: "Pink", correct: false },
            { text: "Blue", correct: false },
            { text: "Yellow", correct: true },
            { text: "Green", correct: false },
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false },
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "2", correct: false },
        ]
    },
    {
        question: "Which is a programming language?",
        answers: [
            { text: "Banana", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Orange", correct: false },
            { text: "Potato", correct: false },
        ]
    },

    //sfgdsg
    {
        question: "which is the National Animal of Nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"cow", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "what is the capita city of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"kathmandu", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "What is the nationa flower of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"Rhododendrone", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },
    
    //sddsfgas
    {
        question: "which is the National Animal of Nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"cow", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "what is the capita city of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"kathmandu", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "What is the nationa flower of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"Rhododendrone", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },
    // fgfgg
    {
        question: "which is the National Animal of Nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"cow", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "what is the capita city of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"kathmandu", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

    {
        question: "What is the nationa flower of nepal ?",
        answers:[
           {text:"shark", correct: false},
           {text:"Rhododendrone", correct: true},
           {text:"Elephant", correct: false},
           {text:"Girraphe", correct: false},
        ]
    },

];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-btn");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetData();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetData() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.style.backgroundColor = "green";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red";
    }

    // Disable all buttons after selection
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "green";
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetData();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

// Start quiz when page loads
startQuiz();
