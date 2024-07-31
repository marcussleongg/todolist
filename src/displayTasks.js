import editBtnFunc from './editBtn.js';
import delBtnFunc from './deleteBtn.js';
import toggleExpansion from './toggleExpansion.js';

export default function displayTasks(arr, index, allProjsArr, completedTasksArr, allTodoArr) {
    const display = document.querySelector('#display');
    const taskDisplay = document.createElement('div');
    const topDisplay = document.createElement('div');
    const bottomDisplay = document.createElement('div');
    const titleDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const duedateDisplay = document.createElement('p');
    const projectDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const delBtn = document.createElement('div');
    //index provided here depends on the index array provided in filterSelection.js, where this module is called
    titleDisplay.innerHTML = arr[index].title;
    titleDisplay.style.fontWeight = 'bold';
    titleDisplay.setAttribute('id', titleDisplay.innerHTML);
    topDisplay.appendChild(titleDisplay);
    duedateDisplay.innerHTML = `Due: ${arr[index].dueDate}`;
    topDisplay.appendChild(duedateDisplay);
    priorityDisplay.innerHTML = `Priority: ${arr[index].priority}`;
    if (arr[index].priority == 'Low') {
        priorityDisplay.style.color = 'green';
    } else if (arr[index].priority == 'Medium') {
        priorityDisplay.style.color = 'orange';
    } else if (arr[index].priority == 'High') {
        priorityDisplay.style.color = 'red';
    }
    topDisplay.appendChild(priorityDisplay);
    descDisplay.innerHTML = arr[index].description;
    bottomDisplay.appendChild(descDisplay);
    projectDisplay.innerHTML = `Project: ${arr[index].project}`;
    bottomDisplay.appendChild(projectDisplay);
    //add edit button to task
    const editBtn = document.createElement('div');
    editBtn.innerHTML = '<img src="../src/pen.png" alt="Edit" id="editIcon"></img>';
    editBtn.setAttribute('id', 'editbtn');
    topDisplay.appendChild(editBtn);
    //add delete button to task
    delBtn.innerHTML = '<img src="../src/trash-can-bin.png" alt="Delete" id="delIcon"></img>';
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
    //add functionality to individual edit and delete buttons for each task
    editBtnFunc(allTodoArr, allProjsArr, completedTasksArr, titleDisplay.innerHTML);
    delBtnFunc(allTodoArr, allProjsArr, completedTasksArr, titleDisplay.innerHTML);
}