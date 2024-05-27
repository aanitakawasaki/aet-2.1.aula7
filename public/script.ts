const number1Input = document.querySelector('#number1') as HTMLInputElement;
const number2Input = document.querySelector('#number2') as HTMLInputElement;
const sumButton = document.querySelector('#sum') as HTMLButtonElement;
const subtractionButton = document.querySelector('#subtraction') as HTMLButtonElement;
const multiplicationButton = document.querySelector('#multiplication') as HTMLButtonElement;
const divisionButton = document.querySelector('#division') as HTMLButtonElement;
const messageDiv = document.querySelector('#message') as HTMLDivElement;

function showError(message: string) {
    messageDiv.textContent = message;
}

function clearError() {
    messageDiv.textContent = '';
}

function clearInputs() {
    number1Input.value= '';
    number2Input.value= '';
}

function calculate(operation: string) {    
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    
    clearError();
    
    if (isNaN(number1) || isNaN(number2)) {
        showError('Os valores inseridos não são válidos.');
        return;
    }
    
    let result: number;
    
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
                return;
            }
            result = number1 / number2;
            break;
        default:
            showError('Operação inválida.');
            return;
    }
    messageDiv.textContent = `O resultado é: ${result}.`;
    clearInputs();
}

sumButton.addEventListener('click', () => calculate('+'));
subtractionButton.addEventListener('click', () => calculate('-'));
multiplicationButton.addEventListener('click', () => calculate('*'));
divisionButton.addEventListener('click', () => calculate('/'));