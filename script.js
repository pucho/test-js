const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
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

myQuestions.forEach((question) => {
  const questionNode = document.createElement("div");
  const questionTitle = document.createElement("h4");
  questionTitle.appendChild(document.createTextNode(question.question));
  let answersHTML = ``;
  for (const [key, value] of Object.entries(question.answers)) {
    answersHTML += `
    <li>
      <input type="radio" id="${value}" name="${question.question}" value="${value}" required/>
      <label for="${value}">${value}</label>
    </li>
    `;
  }
  console.log(answersHTML)
  questionNode.innerHTML = answersHTML;
  questionNode.prepend(questionTitle)
  questionsContainer.appendChild(questionNode);
});

const form = document.querySelector("#quiz");
console.log(form);
form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const formData = new FormData(form);
  },
  false
);

form.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  const data = e.formData;
  console.log(data);
  for (const value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
});
