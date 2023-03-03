const myQuestions = [
  {
    id: 1,
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    id: 2,
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    id: 3,
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

const questionsContainer = document.querySelector("#questions");

myQuestions.forEach((question, index) => {
  const questionNode = document.createElement("ul");
  const questionTitle = document.createElement("h3");
  questionTitle.classList.add("question-title");
  questionTitle.appendChild(document.createTextNode(question.question));
  let answersHTML = ``;
  for (const [key, value] of Object.entries(question.answers)) {
    answersHTML += `
    <li class="list-item">
      <input type="radio" id="${key}-${question.id}" name="${question.id}" value="${value}" required/>
      <label for="${value}">${value}</label>
    </li>
    `;
  }
  questionNode.innerHTML = answersHTML;
  questionNode.prepend(questionTitle)
  questionsContainer.appendChild(questionNode);
});

const form = document.querySelector("#quiz");
form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    checkAnswers(formData)
  },
  false
);

form.addEventListener("formdata", (e) => {
  // Get the form data from the event object
  const data = e.formData;
  console.log(data);
  for (const value of data.values()) {
    console.log(value);
  }
});

function checkAnswers(formData) {
  let correctAnswers = 0;
  
  for(let i = 0; i < myQuestions.length; i++ ) {
    let question = myQuestions[i]; 
    const selectedAnswer = formData.get(question.id);
    console.log(formData)
    const isCorrect = selectedAnswer === question.answers[question.correctAnswer];
    console.log(isCorrect)
    // const answerNode = document.querySelector(`${}-{}`)
  }

  myQuestions.forEach((question) => {
    const answerKey = `answer-${question.id}`;
    const selectedAnswer = formData.get(question.id);
    const isCorrect = selectedAnswer === question.correctAnswer;
    const answerNodes = document.getElementsByName(answerKey);
    console.log(answerKey)
    answerNodes.forEach((node) => {
      console.log(node.value)
      console.log(selectedAnswer)
      if (node.value === selectedAnswer) {
        if (isCorrect) {
          node.parentElement.style.color = "green";
          correctAnswers++;
        } else {
          node.parentElement.style.color = "red";
        }
      } else if (node.value === question.correctAnswer) {
        node.parentElement.style.color = "green";
      }
      node.disabled = true;
    });
  });

  console.log(`You got ${correctAnswers} out of ${myQuestions.length} correct!`);
}








