export default function displayTasks(allTodoArr, index) {
    const body = document.querySelector('body');
    const taskDisplay = document.createElement('p');
    taskDisplay.innerHTML = allTodoArr[index].title;
    body.appendChild(taskDisplay);
}