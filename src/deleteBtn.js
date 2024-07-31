import deleteTask from './deleteTask.js';
import selectFilter from './filterSelection.js';

export default function deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr, fromEdit) {
    let display = document.querySelector('#display');
    let allDelBtns = document.querySelectorAll('#delbtn');
    if (fromEdit == 'fromedit') {
        if (display.className == 'completedtasks') {
            allDelBtns.forEach((delBtn) => {
                console.log('what');
                console.log(completedTasksArr);
                delBtn.addEventListener('click', () => {
                    deleteTask(delBtn.parentNode.firstChild.textContent, completedTasksArr);
                    console.log(completedTasksArr);
                    selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                })
            })
        } else {
            allDelBtns.forEach((delBtn) => {
                delBtn.addEventListener('click', () => {
                    console.log('ok');
                    deleteTask(delBtn.parentNode.firstChild.textContent, allTodoArr);
                    selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                })
            })
        }
    } else {
        display = document.querySelector('#display');
        allDelBtns = document.querySelectorAll('#delbtn');
        if (display.className == 'completedtasks') {
            allDelBtns.forEach((delBtn) => {
                console.log('what');
                console.log(completedTasksArr);
                delBtn.addEventListener('click', () => {
                    deleteTask(delBtn.parentNode.firstChild.textContent, completedTasksArr);
                    console.log(completedTasksArr);
                    selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                })
            })
        } else {
            allDelBtns.forEach((delBtn) => {
                delBtn.addEventListener('click', () => {
                    console.log('whathe');
                    deleteTask(delBtn.parentNode.firstChild.textContent, allTodoArr);
                    selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                })
            })
        }
    }
}