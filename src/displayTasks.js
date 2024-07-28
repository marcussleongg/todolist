import editBtnFunc from './editBtn.js'

export default function displayTasks(allTodoArr, index) {
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('div');
    const titleDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const duedateDisplay = document.createElement('p');
    const projectDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const editBtn = document.createElement('button');
    titleDisplay.innerHTML = allTodoArr[index].title;
    taskDisplay.appendChild(titleDisplay);
    duedateDisplay.innerHTML = allTodoArr[index].dueDate;
    taskDisplay.appendChild(duedateDisplay);
    projectDisplay.innerHTML = allTodoArr[index].project;
    taskDisplay.appendChild(projectDisplay);
    priorityDisplay.innerHTML = allTodoArr[index].priority;
    taskDisplay.appendChild(priorityDisplay);
    descDisplay.innerHTML = allTodoArr[index].description;
    taskDisplay.appendChild(descDisplay);
    editBtn.innerHTML = 'Edit';
    editBtn.setAttribute('id', 'editbtn');
    taskDisplay.appendChild(editBtn);
    display.appendChild(taskDisplay);
    editBtnFunc(allTodoArr, index);
}