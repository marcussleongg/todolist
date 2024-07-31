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
        console.log('mew');
        const newDelBtn = document.createElement('button');
        newDelBtn.innerHTML = 'Deletebb';
        //newDelBtn.setAttribute('id', 'delbtn');
        //topDisplay.appendChild(newDelBtn);
        task.parentNode.appendChild(newDelBtn);
        if (display.className == 'completedtasks') {
            console.log('i am added only when filter is clicked');
            newDelBtn.addEventListener('click', () => {
                console.log('yes');
                deleteTask(newDelBtn.parentNode.firstChild.textContent, completedTasksArr);
                selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
            })
        } else {
            newDelBtn.addEventListener('click', () => {
                console.log('what');
                deleteTask(newDelBtn.parentNode.firstChild.textContent, allTodoArr);
                selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
            })
        }
    //})
}