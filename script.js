const quizDB = [{
        question: "What was the name of Tony Tony Chopper's father?",
        a: "Hiluluk",
        b: "Dalton",
        c: "Kureha",
        d: "Wapol",
        ans: "ans1"
    },

    {
        question: "Who promised that they would never lose another fight until they defeated a certain someone?",
        a: "Zorro",
        b: "Luffy",
        c: "Sanji",
        d: "Robin",
        ans: "ans1"
    },

    {
        question: "Who was the first villain to defeat Luffy",
        a: "Arlong",
        b: "Crocodile",
        c: "Don Krieg",
        d: "Captain Buggy",
        ans: "ans2"
    },

    {
        question: "What made Crocodile join Luffy's Rescue Ace Crew?",
        a: "Luffy",
        b: "Ace",
        c: "Jimbe",
        d: "Ivankov",
        ans: "ans4"
    },

    {
        question: "Who was the first woman to kiss Luffy?",
        a: "Hancock",
        b: "Nami",
        c: "Robin",
        d: "Reiju",
        ans: "ans4"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You collected ${score} out of ${quizDB.length} gold coins </h3>
            <button class="btn" onclick="location.reload()"> PLAY AGAIN </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});