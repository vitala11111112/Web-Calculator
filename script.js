const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (button.classList.contains('operator')) {
            if (buttonValue === '=') {
                try {
                    currentInput = eval(currentInput); // Осторожно!
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                    currentInput = '';
                }
            } else if (buttonValue === 'C') {
                currentInput = '';
                display.value = '';
            } else if (buttonValue === '←') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else {
                currentInput += buttonValue;
                display.value = currentInput;
            }
        } else {
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});