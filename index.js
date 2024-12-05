let currentNumber = ""
let previousNumber = ""
let operation = null

// Atualizar o display
function updateDisplay() {

  const display = document.getElementById("display");
  display.textContent = currentNumber || "0"

}

// Adicionar números ao display
function appendNumber(number){

  currentNumber += number;
  updateDisplay();

}

// Escolha a operação
function chooseOperation(op){

  if(currentNumber === "") return;

  if(previousNumber!== ""){

    calculate();

  }

  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";

}

// Realizar o cálculo
function calculate(){

  let result;
  const prev = parseFloat(previousNumber)
  const current = parseFloat(currentNumber)

  if(isNaN(prev) || isNaN(current)) return;

  switch(operation){

    case "+":
      result = prev + current
      break;

    case "-":
      result = prev - current
      break
      
    case "*":
      result = prev * current
      break 
      
    case "/":

      if(current === 0) return alert("Divisão por zero!");

      result = prev / current
      break;
    
    default:
      return  

  }

  currentNumber = result.toString()
  operation = null
  previousNumber = ""
  updateDisplay()

}

// Limpar o display
function clearDisplay(){

  currentNumber = ""
  previousNumber = ""
  operation = null
  updateDisplay()

}

// Copiar o valor no display
function copyToClipboard(){

  const display = document.getElementById("display")
  const textToCopy = display.textContent

  navigator.clipborad.writeText(textToCopy).then(() => {

    display.textContent = "Copiado!"
    setTimeout(() => updateDisplay(),1000)

  }).catch(err => {

    console.error("Erro ao copiar para a área de transferência", err)

  })

}