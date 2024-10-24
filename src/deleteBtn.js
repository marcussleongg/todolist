import deleteTask from './deleteTask.js';
import selectFilter from './filterSelection.js';

export default function deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr, taskTitle) {
    let display = document.querySelector('#display');
    let allDelBtns = document.querySelectorAll('#delbtn');
    let topDisplays = document.querySelectorAll('#topdisplay');
    const task = document.getElementById(taskTitle);
    const delBtn = task.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    //topDisplays.forEach((topDisplay) => {
        //const delBtn = topDisplay.querySelector('#delbtn');
        //topDisplay.removeChild(delBtn);
        delBtn.parentNode.removeChild(delBtn);
        const newDelBtn = document.createElement('div');
        newDelBtn.innerHTML = '<img src="src/trash-can-bin.png" alt="Delete" id="delIcon"></img>';
        newDelBtn.setAttribute('id', 'delbtn');
        //topDisplay.appendChild(newDelBtn);
        task.parentNode.appendChild(newDelBtn);
        if (display.className == 'completedtasks') {
            //console.log('i am added only when filter is clicked');
            newDelBtn.addEventListener('click', () => {
                deleteTask(newDelBtn.parentNode.firstChild.textContent, completedTasksArr);
                selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
            })
        } else {
            newDelBtn.addEventListener('click', () => {
                deleteTask(newDelBtn.parentNode.firstChild.textContent, allTodoArr);
                selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
            })
        }
    //})
}