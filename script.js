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

const questionsContainer = document.querySelector("#questions")

myQuestions.forEach(question => {
  const questionNode = document.createElement("div");
  const questionTitle = document.createElement("h2")
  questionTitle
  questionTitle.appendChild(document.createTextNode(question.question))
  Object.
//   question.answers(answer => {
//     const newAnswer = `
//       <input type="radio" id="${answer}" name="contact" value="email" />
//       <label for="contactChoice1">Email</label>

//       <input type="radio" id="contactChoice2" name="contact" value="phone" />
//       <label for="contactChoice2">Phone</label>

//       <input type="radio" id="contactChoice3" name="contact" value="mail" />
//       <label for="contactChoice3">Mail</label>
//   `
//   })
  
})

const form = document.querySelector("#quiz");
console.log(form)
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
  console.log(data)
  for (const value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  
});