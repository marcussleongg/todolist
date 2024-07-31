import selectFilter from './filterSelection.js';
import { format } from "date-fns";
import deleteBtnFunc from './deleteBtn.js';

//behavior for clicking on projects are in displayProj.js
export default function clickOnFilter(allTodoArr, completedTasksArr, allProjsArr) {
    const display = document.querySelector('#display');
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, `dueDate:${format(new Date(), "yyyy-MM-dd")}`, allProjsArr, completedTasksArr);
        //deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr);
    })
    const allTasks = document.querySelector('#alltasks');
    allTasks.addEventListener('click', () => {
        selectFilter(allTodoArr, 'alltasks', allProjsArr, completedTasksArr);
        //deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr);
    })
    const completedTasks = document.querySelector('#completedtasks');
    completedTasks.addEventListener('click', () => {
        console.log(completedTasksArr);
        selectFilter(allTodoArr, 'completedtasks', allProjsArr, completedTasksArr);
        //deleteBtnFunc(allTodoArr, allProjsArr, completedTasksArr);
    })
}