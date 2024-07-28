export default function displayTasks(allTodoArr, index) {
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('p');
    taskDisplay.innerHTML = allTodoArr[index].title;
    display.appendChild(taskDisplay);
}