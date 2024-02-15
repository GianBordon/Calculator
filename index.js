let num1 = '';
let num2 = '';
let operacion = '';

const btnContainer = document.querySelector('.btn-container');
const display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDecimal = document.querySelector('.point');

const actualizarDisplay = () => {
    display.textContent = num1 + operacion + num2;
};

const limpiarDisplay = () => {
    num1 = '';
    num2 = '';
    operacion = '';
    actualizarDisplay();
};

const realizarOperacion = () => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "ERROR";
            }
            resultado = num1 / num2;
            break;
        default:
            break;
    }
    num1 = resultado.toString();
    num2 = '';
    operacion = '';
    actualizarDisplay();
};

btnClear.addEventListener('click', limpiarDisplay);

btnContainer.addEventListener('click', event => {
    if (event.target.matches('button')) {
        const btnText = event.target.textContent;
        if (btnText === 'C') {
            limpiarDisplay();
        } else if (!isNaN(btnText) || btnText === '.') {
            if (operacion === '') {
                num1 += btnText;
            } else {
                num2 += btnText;
            }
        } else {
            if (num1 !== '' && num2 !== '') {
                realizarOperacion();
            } else if (btnText === '=') {
                if (num1 === '') {
                    display.textContent = "Ingresa un número primero";
                }
            } else {
                operacion = btnText;
            }
        }
        actualizarDisplay();
    }
});

const agregarPuntoDecimal = () => {
    const currentNumber = operacion === '' ? num1 : num2;
    if (!currentNumber.includes('.')) {
        if (operacion === '') {
            num1 += '.';
        } else {
            num2 += '.';
        }
        actualizarDisplay();
    }
};

btnDecimal.addEventListener('click', agregarPuntoDecimal);
