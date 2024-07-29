import editBtnFunc from './editBtn.js';
import delBtnFunc from './deleteBtn.js';
import toggleExpansion from './toggleExpansion.js';

export default function displayTasks(allTodoArr, index, allProjsArr, completedTasksArr) {
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('div');
    const topDisplay = document.createElement('div');
    const bottomDisplay = document.createElement('div');
    const titleDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const duedateDisplay = document.createElement('p');
    const projectDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    //index provided here depends on the index array provided in filterSelection.js, where this module is called
    titleDisplay.innerHTML = allTodoArr[index].title;
    titleDisplay.style.fontWeight = 'bold';
    topDisplay.appendChild(titleDisplay);
    duedateDisplay.innerHTML = `Due: ${allTodoArr[index].dueDate}`;
    topDisplay.appendChild(duedateDisplay);
    priorityDisplay.innerHTML = `Priority: ${allTodoArr[index].priority}`;
    if (allTodoArr[index].priority == 'Low') {
        priorityDisplay.style.color = 'green';
    } else if (allTodoArr[index].priority == 'Medium') {
        priorityDisplay.style.color = 'orange';
    } else if (allTodoArr[index].priority == 'High') {
        priorityDisplay.style.color = 'red';
    }
    topDisplay.appendChild(priorityDisplay);
    descDisplay.innerHTML = allTodoArr[index].description;
    bottomDisplay.appendChild(descDisplay);
    projectDisplay.innerHTML = `Project: ${allTodoArr[index].project}`;
    bottomDisplay.appendChild(projectDisplay);
    //add edit button to all tasks
    editBtn.innerHTML = 'Edit';
    editBtn.setAttribute('id', 'editbtn');
    topDisplay.appendChild(editBtn);
    //add delete button to all tasks
    delBtn.innerHTML = 'Delete';
    delBtn.setAttribute('id', 'delbtn');
    topDisplay.appendChild(delBtn);
    taskDisplay.appendChild(topDisplay);
    taskDisplay.appendChild(bottomDisplay);
    topDisplay.setAttribute('id', 'topdisplay');
    bottomDisplay.setAttribute('id', 'bottomdisplay');
    bottomDisplay.style.display = 'none';
    taskDisplay.addEventListener('click', () => {
        toggleExpansion(taskDisplay);
    })
    display.appendChild(taskDisplay);
    editBtnFunc(allTodoArr, index, allProjsArr, completedTasksArr);
    delBtnFunc(allTodoArr, allProjsArr, completedTasksArr);
}