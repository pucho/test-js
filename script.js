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
  const questionTitle = document.createElement("h4");
  questionTitle.appendChild(document.createTextNode(question.question));
  let answersHTML = ``;
  for (const [key, value] of Object.entries(question.answers)) {
    answersHTML += `
    <li>
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
