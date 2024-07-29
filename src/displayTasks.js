import editBtnFunc from './editBtn.js'

export default function displayTasks(allTodoArr, index, allProjsArr) {
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('div');
    const titleDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const duedateDisplay = document.createElement('p');
    const projectDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const editBtn = document.createElement('button');
    //index provided here depends on the index array provided in filterSelection.js, where this module is called
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
    //add edit button to all tasks
    editBtn.innerHTML = 'Edit';
    editBtn.setAttribute('id', 'editbtn');
    taskDisplay.appendChild(editBtn);
    display.appendChild(taskDisplay);
    editBtnFunc(allTodoArr, index, allProjsArr);
}