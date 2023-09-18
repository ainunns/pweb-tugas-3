function calculate() {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let operator = document.getElementById("operator").value;
  let result = document.getElementById("result");

  let calc = 0;

  if (operator == "+") {
    calc = firstNumber + secondNumber;
  } else if (operator == "-") {
    calc = firstNumber - secondNumber;
  } else if (operator == "*") {
    calc = firstNumber * secondNumber;
  } else if (operator == "/") {
    if (secondNumber == 0) {
      calc = "Error";
    } else {
      calc = firstNumber / secondNumber;
    }
  }

  result.innerHTML = calc;
  event.preventDefault();
}
