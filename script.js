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

const contQuest = document.getElementById('questions');
const ulCont = document.getElementById('questionsList');

myQuestions.forEach( (ele, index) => {
  const liElem = document.createElement('li');
  const selectElem = document.createElement('span');
  const contTitle = document.createTextNode(ele.question);
  
  selectElem.appendChild(contTitle);
  liElem.appendChild(selectElem);
  ulCont.appendChild(liElem);
  
  // Loop on answers object
  for (const property in ele.answers) {
    const contOption = document.createElement('div');
    const contInput = document.createElement('input');
    const contText = document.createElement('label');
    const text = document.createTextNode(ele.answers[property]);
    
    // Set attributes on inputs elements and label
    contInput.setAttribute("type", "radio");
    contInput.setAttribute("name", `group${index}`);
    contInput.setAttribute("value", '');
    contInput.setAttribute("id", `group${index}-${property}`);
    contText.setAttribute("for", `group${index}-${property}`);
    
    contText.appendChild(text);
    contOption.appendChild(contInput);
    contOption.appendChild(contText);
    liElem.appendChild(contOption);
  }
})

// Get Form values on submit
function sendForm() {
  const formElem = document.forms.quiz;
  console.log(formElem.elements.username.value);
  
}



