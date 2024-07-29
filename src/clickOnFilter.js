import selectFilter from './filterSelection.js';
import { format } from "date-fns";
import clearDisplay from './clearDisplay.js';
import displayTasks from './displayTasks.js';

//behavior for clicking on projects are in displayProj.js
export default function clickOnFilter(allTodoArr, completedTasksArr, allProjsArr) {
    const display = document.querySelector('#display');
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, `dueDate:${format(new Date(), "yyyy-MM-dd")}`, allProjsArr, completedTasksArr);
    })
    const allTasks = document.querySelector('#alltasks');
    allTasks.addEventListener('click', () => {
        selectFilter(allTodoArr, 'alltasks', allProjsArr, completedTasksArr);
    })
    const completedTasks = document.querySelector('#completedtasks');
    completedTasks.addEventListener('click', () => {
        selectFilter(allTodoArr, 'completedtasks', allProjsArr, completedTasksArr);
    })
}