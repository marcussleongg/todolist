import deleteTask from './deleteTask.js';
import selectFilter from './filterSelection.js';

export default function deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr) {
    const allDelBtns = document.querySelectorAll('#delbtn');
    const display = document.querySelector('#display');
    allDelBtns.forEach((delBtn) => {
        delBtn.addEventListener('click', () => {
            deleteTask(delBtn.parentNode.firstChild.textContent, allTodoArr);
            selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
        })
    })
}