import clearDisplay from './clearDisplay.js';

export default function displayTasks(allTodoArr, index) {
    clearDisplay();
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('p');
    taskDisplay.innerHTML = allTodoArr[index].title;
    display.appendChild(taskDisplay);
}