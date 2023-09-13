let result = document.getElementById('result');
let isResultCalculated = false;

function appendToResult(value) {
    if (isResultCalculated) {
        result.textContent = '';
        isResultCalculated = false;
    }

    if (result.textContent === '0' && value !== '.') {
        result.textContent = '';
    }

    result.textContent += value;
}

function clearResult() {
    result.textContent = '0';
}

function calculateResult() {
    try {
        result.textContent = eval(result.textContent);
        isResultCalculated = true;
    } catch (error) {
        result.textContent = 'Error';
        isResultCalculated = true;
    }
}
