const quizForm = document.getElementById("quiz");
const questionsWrapper = document.getElementById("questions");

const buildQuiz = (questions) => {
  const output = [];
  
  // search questions and create each fieldset
  let answerValue;
  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    // iterate from each answer
    Object.keys(currentQuestion.answers).forEach((answerKey) => {
      answerValue = currentQuestion.answers[answerKey];
      
      // create radio input to store the response
      answers.push(`
        <div class="form-check">
          <input type="radio" class="form-check-input" value="${answerKey}" name="question${questionNumber}" id="answer${answerValue}">
          <label class="form-check-label" for="answer${answerValue}">
            ${answerKey}: ${answerValue}
          </label>
        </div>
      `);
    })
    
    output.push(`
      <fieldset>
        <div class="mb-3">
          <strong>${currentQuestion.question}</strong>
          <div class="answers">${answers.join("")}</div>
        </div>
      </fieldset>
    `);
  })
  
  // build all questions
  questionsWrapper.innerHTML = output.join("");
}

const checkResults = (e, questions) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  const quizAnswers = document.querySelectorAll(".answers");
  
  // remove
  const answersRadios = answers.querySelectorAll(`input[name="question${questionNumber}"]`);
  
  questions.forEach((currentQuestion, questionNumber) => {
    // find selected answers
    const answerValue = formData.get(`question${questionNumber}`);
    const isCorrect = answerValue === currentQuestion.correctAnswer;
    
    const answers = quizAnswers[questionNumber];
    
    if (isCorrect) {
      const checkedRadio = answers.querySelector(`input[name="question${questionNumber}"]:checked`);
      checkedRadio.classList.remove("is-invalid");
      checkedRadio.classList.add("is-success");
    } else {
      const answersRadios = answers.querySelectorAll(`input[name="question${questionNumber}"]`);
      answersRadios.forEach((answersRadio) => {
        answersRadio.classList.add("is-invalid");
        answersRadio.classList.remove("is-success");
      })
    }
  })
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

quizForm.addEventListener("submit", (e) => checkResults(e, myQuestions));
