const inputOne = document.getElementById('num1');
const inputTwo = document.getElementById('num2');
const resultDisplay = document.getElementById('result-display');
const errorDisplay = document.getElementById('error-message');
const buttons = document.querySelectorAll('.btn');

function calculate(action) {
  const val1 = inputOne.value.trim();
  const val2 = inputTwo.value.trim();

  // 1. Перевірка на пусті поля
  if (val1 === '' || val2 === '') {
    errorDisplay.textContent = 'Помилка: заповніть обидва поля!';
    resultDisplay.textContent = '—';
    return;
  }

  // Заміна коми на крапку для правильного перетворення в число
  const num1 = Number(val1.replace(',', '.'));
  const num2 = Number(val2.replace(',', '.'));

  // 2. Перевірка на неправильні числа
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    errorDisplay.textContent = 'Помилка: введіть правильні числа!';
    resultDisplay.textContent = '—';
    return;
  }

  let result;

  // 3. Математичні дії
  switch (action) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        errorDisplay.textContent = 'Помилка: ділення на нуль неможливе!';
        resultDisplay.textContent = '—';
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  // 4. округлення до сотих, якщо результет не ціле число
  if (!Number.isInteger(result)) {
    result = parseFloat(result.toFixed(2));
  }

  // Вивід успішного результату
  errorDisplay.textContent = '';
  resultDisplay.textContent = result;
}

// Події для кнопок
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculate(btn.dataset.action);
  });
});