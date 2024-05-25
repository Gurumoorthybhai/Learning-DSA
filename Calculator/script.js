document.addEventListener('DOMContentLoaded', () => {

    const previousNumberEle = document.querySelector('[data-previous]');
    const currentNumberEle = document.querySelector('[data-current]');
    const allClearEle = document.querySelector('[data-allClear]');
    const deletefEle = document.querySelector('[data-delete]');
    const equalEle = document.querySelector('[data-equal]');

    let previousNumber = ''
    let currentNumber = ''
    const operator = '';

    const numbersGrid = document.getElementById('numbers-grid');

    numbersGrid.addEventListener('click', (e) => {
        // console.log(e.target);
        const operandEle = e.target.closest('[data-operand');
        const operator = e.target.closest('[data-operator');

        console.log("operator ", operator);
        if(operandEle && operandEle?.innerHTML) append(operandEle?.innerHTML);
        if(operator && operator?.innerHTML) chooseOperator(operator?.innerHTML);
        updateDisplay();
    });

    equalEle.addEventListener('click', calculate)

    function append(number) {
        if(number === '.' && currentNumber.includes('.')) return;
        currentNumber = currentNumber.toString() + number.toString();
    }

    function updateDisplay() {
        currentNumberEle.innerText = currentNumber;
        previousNumberEle.innerText = previousNumber;
    }

    function chooseOperator(operator) {
        if(currentNumber) calculate();
        operator = operator;
        previousNumber = currentNumber;
        currentNumber = '';

    }

    function calculate() {
        const prev = parseFloat(previousNumber);
        const curr = parseFloat(currentNumber);
        let result;

        if(isNaN(prev) || isNaN(curr)) return;

        switch(operator) {
            case '+':
                calc = prev+curr;
                break;
            case '-':
                calc = prev-curr;
                break;
            case '*':
                calc = prev*curr;
                break;
            case '/':
                calc = prev/curr;
                break;
            default:
                return;

        }
    }
})
function allClear() {

}

function deletef() {

}

function equal() {

}

