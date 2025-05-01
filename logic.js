let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
  item.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === 'C') {
      screenValue = '';
      screen.value = screenValue;
    } else if (buttonText === '=') {
      try {
        let result = eval(screenValue).toString();
        addToHistory(screenValue + ' = ' + result);
        screen.value = result;
        screenValue = result;
      } catch (err) {
        screen.value = 'Error';
        screenValue = '';
      }
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

function addToHistory(entry) {
  let list = document.getElementById('historyList');
  let li = document.createElement('li');
  li.textContent = entry;
  list.prepend(li);
}
