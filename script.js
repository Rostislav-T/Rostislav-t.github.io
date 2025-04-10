


// Функция для добавления значения в дисплей
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Функция для очистки дисплея
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Функция для вычисления результата
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Ошибка';
    }
}

// Функция для обработки нажатых клавиш
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.';
    
    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});