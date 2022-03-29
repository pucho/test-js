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
console.log('test');

myQuestions.forEach( (ele, index) => {
  const liElem = document.createElement('li');
  const selectElem = document.createElement('span');
  const contTitle = document.createTextNode(ele.question);
  
  selectElem.appendChild(contTitle);
  liElem.appendChild(selectElem);
  ulCont.appendChild(liElem);
  
  for (const property in ele.answers) {
    const contOption = document.createElement('div');
    const contInput = document.createElement('input');
    contInput.setAttribute("type", "radio");
    contInput.setAttribute("name", `group${index}`);
    const contText = document.createElement('label');
    const text = document.createTextNode(ele.answers[property]);
    contText.appendChild(text);
    
    contOption.appendChild(contInput);
    contOption.appendChild(contText);
    liElem.appendChild(contOption);
  }
})

function sendForm() {
  console.log(document.querySelector('quiz').value);
}



