/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*-------------------------------- Variables --------------------------------*/

let currentInput = '';
let firstNumber = null;
let operator = null;


/*------------------------ Cached Element References ------------------------*/

// const buttons = document.querySelectorAll('.button');
// const calculator = document.querySelector('#calculator');
// const display = document.querySelector('.display');



/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log('Clicked:', event.target.innerText);
  });
});
calculator.addEventListener('click', (event) => {
  const value = event.target.innerText;


  if (!event.target.classList.contains('button')) return;

  if (value === 'C') {
    currentInput = '';
    firstNumber = null;
    operator = null;
    display.textContent = '';
    return;
  }
  if (value === '=') {
    if (firstNumber !== null && operator && currentInput !== '') {
      const secondNumber = parseFloat(currentInput);
      const result = operate(firstNumber, secondNumber, operator);
      display.textContent = result;
      currentInput = result.toString();
      firstNumber = null;
      operator = null;
    }
    return;
  }

  
  if (['+', '-', '*', '/'].includes(value)) {   
  //looking up this code took me a while and the corrct order it should have been in 
  // i had contacted my friends from japan who do coding and asked for their help and i felt dumb compared to them but in the end i sort of 
  // got the hang of this but repetition is definetly a key factor in learnig to code and i honestly felt like giuving up multiple times on this 
  //homework but i pushed through and my friends helped as well.

    if (currentInput !== '') {
      firstNumber = parseFloat(currentInput);
      operator = value;
      currentInput = '';
    }
    return;
  }


  if (event.target.classList.contains('number')) {
    currentInput += value;
    display.textContent = currentInput;
  }
});


/*-------------------------------- Functions --------------------------------*/

 function operate(num1, num2, op) {
  switch (op) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 === 0 ? 'Error' : num1 / num2;
    default: return 0;
  }
}
// getting help was difficult i had done tons of reading and it was barley making out whati needed and it was like putting together a bunch of puzzle pieces.
//everything took me a while and then i realized i didnt set up a repository and ended up making a mess in my git hub.
