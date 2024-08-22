let question = [
    {
        que: 'What is Html?',
        a: 'Html is a Programming Language',
        b: 'Html is a Hyper Text Markup Language',
        c: 'Html is a Scripting Language',
        d: 'Html is a Database',
        correct: 'b'

    },
    {
        que: 'What is CSS used for in web development?',
        a: 'CSS is used for structuring web content.',
        b: ' CSS is used for scripting web pages.',
        c: 'CSS is used for styling web pages.',
        d: 'CSS is used for managing databases.',
        correct: 'c'

    },
    {
        que: 'Which of the following is a JavaScript framework?',
        a: 'Django',
        b: 'Angular',
        c: 'Flask',
        d: 'Laravel',
        correct: 'b'

    },
    {
        que: 'What does SQL stand for?',
        a: 'Simple Query Language',
        b: 'Standard Query Language',
        c: 'Structured Query Language',
        d: 'System Query Language',
        correct: 'c'

    },
    {
        que: 'Which tag is used to create a hyperlink in HTML?',
        a: '<link>',
        b: '<a>',
        c: '<href>',
        d: '<url>',
        correct: 'b'

    },
    {
        que: 'What is the purpose of the <head> tag in HTML?',
        a: ' To contain the main content of the document',
        b: ' To define the header section of the document',
        c: 'To contain meta-information about the document',
        d: 'To define the footer of the document',
        correct: 'c'

    },
];

let index = 0;
let ques = document.getElementById("question")
let opt = document.querySelectorAll(".optionsInp")
let total = question.length;
let right = 0, wrong = 0;
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    ques.innerText = `${index + 1}) ${data.que}`;
    opt[0].nextElementSibling.innerText = data.a;
    opt[1].nextElementSibling.innerText = data.b;
    opt[2].nextElementSibling.innerText = data.c;
    opt[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    opt.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    opt.forEach(
        (input) => {
            input.checked = false;
        }
    )
};

const endQuiz = () => {
    document.querySelector('.quiz-box').innerHTML = `
    <h3>Thank You For Playing Quiz</h3>
    <h2>${right} / ${total} Answers are correct</h2>
     <button id="submit-btn" onclick="location.replace(location.href)">Play Again</button>
    `
}

// initial call
loadQuestion();