const quizForm = document.getElementById("quiz");
const questionsWrapper = document.getElementById("questions");

const buildQuiz = (questions) => {
  const output = [];
  
  let answerValue;
  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    Object.keys(currentQuestion.answers).forEach((answerKey) => {
      answerValue = currentQuestion.answers[answerKey];
      
      answers.push(`
        <div class="form-check">
          <input type="radio" class="form-check-input" value="${answerValue}" name="question${questionNumber}" id="answer${answerValue}" required>
          <label class="form-check-label" for="answer${answerValue}">
            ${answerKey}: ${answerValue}
          </label>
        </div>
      `);
    })
    
    output.push(`
      <div class="mb-2">
        <strong>${currentQuestion.question}</strong>
        ${answers.join("")}
      </div>
    `);
  })
  
  questionsWrapper.innerHTML = output.join("");
}

const checkResults = () => {
  console.log("Checking results...")
}


const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

buildQuiz(myQuestions);

quizForm.addEventListener("submit", checkResults);
