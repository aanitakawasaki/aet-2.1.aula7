const number1Input = document.querySelector('#number1');
const number2Input = document.querySelector('#number2');
const sumButton = document.querySelector('#sum');
const subtractionButton = document.querySelector('#subtraction');
const multiplicationButton = document.querySelector('#multiplication');
const divisionButton = document.querySelector('#division');
const messageDiv = document.querySelector('#message');
function showError(message) {
    messageDiv.textContent = message;
}
function clearError() {
    messageDiv.textContent = '';
}
function clearInputs() {
    number1Input.value = '';
    number2Input.value = '';
}
function calculate(operation) {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    clearError();
    if (isNaN(number1) || isNaN(number2)) {
        showError('Os valores inseridos não são válidos.');
        clearInputs();
        return;
    }
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                showError('Não é possível dividir por zero.');
                clearInputs();
                return;
            }
            result = number1 / number2;
            break;
        default:
            showError('Operação inválida.');
            clearInputs();
            return;
    }
    messageDiv.textContent = `O resultado é: ${result}.`;
    clearInputs();
}
sumButton.addEventListener('click', () => calculate('+'));
subtractionButton.addEventListener('click', () => calculate('-'));
multiplicationButton.addEventListener('click', () => calculate('*'));
divisionButton.addEventListener('click', () => calculate('/'));
export {};
