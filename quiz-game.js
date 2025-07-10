/*
    20 question quiz game:
        - displays current question and multiple choice options
        - increases score if correct option was selected
        - displays final score at the end of the game
*/

// DOM elements for later use

const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionScoreContainer = document.getElementById('question-score-container');
const qNum = document.getElementById('q');
const question = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const answerContainer = document.getElementById('answer-container');
const correctIncorrect = document.getElementById('correct-incorrect');
const answer = document.getElementById('answer');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

// questions array:
// - question number
// - question
// - options
// - correct answer

const questions = [
    {
        id: 'Q1:',
        q: 'What is the largest animal in the world?',
        a: 'A: African Elephant',
        b: 'B: Blue Whale', // right
        c: 'C: Giraffe',
        d: 'D: Orca',
        right: 'b',
        correct: 'B: Blue Whale'
    },
    {
        id: 'Q2:',
        q: 'What is the longest bone in the human body?',
        a: 'A: Femur', // right
        b: 'B: Tibia',
        c: 'C: Humerus',
        d: 'D: Spine',
        right: 'a',
        correct: 'A: Femur'
    },
    {
        id: 'Q3:',
        q: 'Which metal is liquid at room temperature?',
        a: 'A: Iron',
        b: 'B: Lead',
        c: 'C: Mercury', // right
        d: 'D: Zinc',
        right: 'c',
        correct: 'C: Mercury'
    },
    {
        id: 'Q4:',
        q: 'What is the world\'s largest desert?',
        a: 'A: Arctic Desert',
        b: 'B: Sahara Desert',
        c: 'C: Gobi Desert',
        d: 'D: Antarctic Desert', // right
        right: 'd',
        correct: 'D: Antarctic Desert'
    },
    {
        id: 'Q5:',
        q: 'What is the hardest natural substance on Earth?',
        a: 'A: Steel',
        b: 'B: Diamond', // right
        c: 'C: Titanium',
        d: 'D: Granite',
        right: 'b',
        correct: 'B: Diamond'
    },
    {
        id: 'Q6:',
        q: 'What language has the most native speakers?',
        a: 'A: Mandarin', // right
        b: 'B: English',
        c: 'C: Spanish',
        d: 'D: Hindi',
        right: 'a',
        correct: 'A: Mandarin'
    },
    {
        id: 'Q7:',
        q: 'What is the hottest planet in the solar system?',
        a: 'A: Mercury',
        b: 'B: Mars',
        c: 'C: Neptune',
        d: 'D: Venus', // right
        right: 'd',
        correct: 'D: Venus'
    },
    {
        id: 'Q8:',
        q: 'Who discovered gravity?',
        a: 'A: Galileo Galilei',
        b: 'B: Albert Einstein',
        c: 'C: Isaac Newton', // right
        d: 'D: Nikola Tesla',
        right: 'c',
        correct: 'C: Isaac Newton'
    },
    {
        id: 'Q9:',
        q: 'What is a group of crows called?',
        a: 'A: A cluster',
        b: 'B: A murder', // right
        c: 'C: A swarm',
        d: 'D: A brood',
        right: 'b',
        correct: 'B: A murder'
    },
    {
        id: 'Q10:',
        q: 'What is the term for an animal that eats only plants?',
        a: 'A: Carnivore',
        b: 'B: Herbivore', // right
        c: 'C: Omnivore',
        d: 'D: Insectivore',
        right: 'b',
        correct: 'B: Herbivore'
    },
    {
        id: 'Q11:',
        q: 'How many strings does a standard violin have?',
        a: 'A: 4', // right
        b: 'B: 6',
        c: 'C: 5',
        d: 'D: 3',
        right: 'a',
        correct: 'A: 4'
    },
    {
        id: 'Q12:',
        q: 'Which video game console was released first?',
        a: 'A: PlayStation',
        b: 'B: XBox',
        c: 'C: Wii',
        d: 'D: Nintendo 64', // right
        right: 'd',
        correct: 'D: Nintendo 64'
    },
    {
        id: 'Q13:',
        q: 'What is the square root of 144?',
        a: 'A: 11',
        b: 'B: 12', // right
        c: 'C: 13',
        d: 'D: 14',
        right: 'b',
        correct: 'B: 12'
    },
    {
        id: 'Q14:',
        q: 'What is the capital of Spain?',
        a: 'A: Barcelona',
        b: 'B: Valencia',
        c: 'C: Madrid', // right
        d: 'D: Lisbon',
        right: 'c',
        correct: 'C: Madrid'
    },
    {
        id: 'Q15:',
        q: 'Who is the Norse god of mischief?',
        a: 'A: Thor',
        b: 'B: Odin',
        c: 'C: Freyr',
        d: 'D: Loki', // right
        right: 'd',
        correct: 'D: Loki'
    },
    {
        id: 'Q16:',
        q: 'Who was the first person to walk on the Moon?',
        a: 'A: Neil Armstrong', // right
        b: 'B: Buzz Aldrin',
        c: 'C: Yuri Gagarin',
        d: 'D: Michael Collins',
        right: 'a',
        correct: 'A: Neil Armstrong'
    },
    {
        id: 'Q17:',
        q: 'Which mammal can fly?',
        a: 'A: Flying squirrel',
        b: 'B: Sugar glider',
        c: 'C: Bat', // right
        d: 'D: Lemur',
        right: 'c',
        correct: 'C: Bat'
    },
    {
        id: 'Q18:',
        q: 'Which famous artist cut off part of his ear?',
        a: 'A: Claude Monet',
        b: 'B: Vincent van Gogh', // right
        c: 'C: Pablo Picasso',
        d: 'D: Leonardo da Vinci',
        right: 'b',
        correct: 'B: Vincent van Gogh'
    },
    {
        id: 'Q19:',
        q: 'What does CPU stand for?',
        a: 'A: Central Programming Unit',
        b: 'B: Computer Processing Unit',
        c: 'C: Core Power Unit',
        d: 'D: Central Processing Unit', // right
        right: 'd',
        correct: 'D: Central Processing Unit'
    },
    {
        id: 'Q20:',
        q: 'What year did the Berlin Wall fall?',
        a: 'A: 1989', // right
        b: 'B: 1985',
        c: 'C: 1889',
        d: 'D: 1987',
        right: 'a',
        correct: 'A: 1989'
    },
    {
        id: 'Q21',
    }
];

let score = 0; // sets score
let currentQIndex = 0; // sets questions index number
let currentQuestion = questions[currentQIndex]; // sets current question according to index

// begins the game and displays first question, hides start btn

const startGame = () => {
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';

    displayQuestion();
}

// displays the questions and options

const displayQuestion = () => {
    currentQuestion = questions[currentQIndex]; // array property
    qNum.textContent = currentQuestion.id; // sets question number
    question.textContent = currentQuestion.q; // displays question
    optionA.textContent = currentQuestion.a; // displays option a
    optionB.textContent = currentQuestion.b; // displays option b
    optionC.textContent = currentQuestion.c; // displays option c
    optionD.textContent = currentQuestion.d; // displays option d

    // hides answer container and next question btn

    optionsContainer.style.display = 'block';
    answerContainer.style.display = 'none';
    nextBtn.style.display = 'none';
}

// checks user selection, updates score and UI accordingly

const isAnswerRight = (option) => {

    // hides options container, and displays answer container and next question btn

    answerContainer.style.display = 'block';
    optionsContainer.style.display = 'none';
    answer.textContent = currentQuestion.correct;
    nextBtn.style.display = 'block';

    // if selection is correct, answer displays in green and score incremented
    // else answer displays in red

    if (option === currentQuestion.right) {
        correctIncorrect.textContent = 'Correct!';
        answerContainer.style.color = 'var(--light-green)';
        answerContainer.style.backgroundColor = 'var(--dark-green)';
        answerContainer.style.border = '3px solid var(--light-green)';
        score += 1;
        scoreDisplay.textContent = score;
    } else if (option !== currentQuestion.right) {
        correctIncorrect.textContent = 'Incorrect!'
        answerContainer.style.color = 'var(--light-red)';
        answerContainer.style.backgroundColor = 'var(--dark-red)';
        answerContainer.style.border = '3px solid var(--light-red)';
    }
}

// goes to the next question when next question btn is clicked

const nextQuestion = () => {
    currentQIndex += 1; // increments index
    currentQuestion = questions[currentQIndex]; // new array property
    displayQuestion();

    // if final question is reached, hides question container and all btns
    // displays final score
    
    if (currentQuestion.id === 'Q21') {
        quizContainer.style.marginTop = '20vh'
        questionScoreContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        answerContainer.style.display = 'block';
        answerContainer.style.marginBottom = '30px';
        answerContainer.style.color = 'inherit';
        answerContainer.style.backgroundColor = 'inherit';
        answerContainer.style.border = '3px solid var(--light-grey)';
        correctIncorrect.textContent = 'Final Score:';
        answer.textContent = `${score} / 20`;

    }
}

// event listeners

startBtn.addEventListener('click', startGame); // begin game btn
optionA.addEventListener('click', () => { // option a is selected
    isAnswerRight('a');
});
optionB.addEventListener('click', () => { // option b is selected
    isAnswerRight('b');
});
optionC.addEventListener('click', () => { // option c is selected
    isAnswerRight('c');
});
optionD.addEventListener('click', () => { // option d is selected
    isAnswerRight('d');
});
nextBtn.addEventListener('click', nextQuestion); // next question btn

// cspell:ignore freyr