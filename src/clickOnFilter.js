import selectFilter from './filterSelection.js';
import { format } from "date-fns";
import clearDisplay from './clearDisplay.js';
import displayTasks from './displayTasks.js';

export default function clickOnFilter(allTodoArr, completedTasksArr, allProjsArr) {
    const display = document.querySelector('#display');
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, `dueDate:${format(new Date(), "yyyy-MM-dd")}`, allProjsArr);
    })
    const allTasks = document.querySelector('#alltasks');
    allTasks.addEventListener('click', () => {
        clearDisplay();
        allTodoArr.forEach((task) => {
            displayTasks(allTodoArr, allTodoArr.indexOf(task), allProjsArr);
        })
        display.setAttribute('class', 'allTasks');
    })
    const completedTasks = document.querySelector('#completedtasks');
    completedTasks.addEventListener('click', () => {
        clearDisplay();
        completedTasksArr.forEach((task) => {
            displayTasks(completedTasksArr, completedTasksArr.indexOf(task), allProjsArr);
        })
        display.setAttribute('class', 'completedTasks');
    })
}