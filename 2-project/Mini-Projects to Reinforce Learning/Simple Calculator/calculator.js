document
  .getElementById('calculateButton')
  .addEventListener('click', function () {
    // Get user input
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const operation = document.getElementById('operation').value;

    // Perform calculation
    const result = calculate(operation, a, b);

    // Display result
    document.getElementById('result').textContent = `Result: ${result}`;
  });

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operation';
  }
}
