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
  
  // Get answers object value
  for (const property in ele.answers) {
    const contOption = document.createElement('div');
    const contInput = document.createElement('input');
    const contText = document.createElement('label');
    const text = document.createTextNode(`${property}: ${ele.answers[property]}`);
    
    // Set attributes on inputs elements and label
    contInput.setAttribute("type", "radio");
    contInput.setAttribute("name", `group${index}`);
    contInput.setAttribute("value", property);
    contInput.setAttribute("required", true);
    contInput.setAttribute("id", `group${index}-${property}`);
    contText.setAttribute("for", `group${index}-${property}`);
    
    contText.appendChild(text);
    contOption.appendChild(contInput);
    contOption.appendChild(contText);
    liElem.appendChild(contOption);
  }
});

// Get Form values on submit
function sendForm() {
  const formElem = document.forms.quiz;
  
  // Get User data
  const userData = {
    userName: formElem.elements.username.value,
    email: formElem.elements.emailAddress.value
  };
  
  // Answer validation
  answerValidation(formElem);
  
  console.log(formElem.elements.username.value);
  console.log(formElem.elements.group0.value);
    
  return false;
  
}

function answerValidation(formElem) {
  myQuestions.forEach( (ele, index) => {
    if(formElem.elements[`group${index}`].value !== ele.correctAnswer) {
        
    }
    for (const property in ele.answers) {
      
    }
  })

}



