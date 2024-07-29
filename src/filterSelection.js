import displayTasks from './displayTasks.js';
import clearDisplay from './clearDisplay.js';

export default function selectFilter(allTodoArr, filter, allProjsArr, completedTasksArr) {
    let indexArr = [];
    const display = document.querySelector('#display');
    //check for tasks due today and return array of indexes of these tasks
    if (filter.substring(0, filter.indexOf(':')) == 'dueDate') {
        allTodoArr.forEach((todo, index) => {
            if (todo.dueDate == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            clearDisplay();
            const nullTodayDisplay = document.createElement('p');
            nullTodayDisplay.innerHTML = 'No tasks due today';
            display.appendChild(nullTodayDisplay);
        //display tasks which match filter of dueDate:today's date
        } else {
            clearDisplay();
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i, allProjsArr);
            })
        }
        display.setAttribute('class', filter);
        //check for tasks that match the project clicked on and return array of indexes of these tasks
    } else if (filter.substring(0, filter.indexOf(':')) == 'project') {
        allTodoArr.forEach((todo, index) => {
            if (todo.project == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            clearDisplay();
            const nullProjTasksDisplay = document.createElement('p');
            nullProjTasksDisplay.innerHTML = 'No tasks under this project';
            display.appendChild(nullProjTasksDisplay);
        //display tasks which match filter of project selected
        } else {
            clearDisplay();
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i, allProjsArr);
            })
        }
        display.setAttribute('class', filter);
    }
    else if (filter == 'alltasks') {
        console.log('working here')
        if (allTodoArr.length == 0) {
            clearDisplay();
            const nullTasksDisplay = document.createElement('p');
            nullTasksDisplay.innerHTML = 'No tasks created yet';
            display.appendChild(nullTasksDisplay);
        } else {
            clearDisplay();
            allTodoArr.forEach((task) => {
                displayTasks(allTodoArr, allTodoArr.indexOf(task), allProjsArr)
            })
        }
        display.setAttribute('class', 'alltasks');
    } else if (filter == 'completedtasks') {
        if (completedTasksArr.length == 0) {
            clearDisplay();
            const nullCompletedTasksDisplay = document.createElement('p');
            nullCompletedTasksDisplay.innerHTML = 'No tasks completed yet';
            display.appendChild(nullCompletedTasksDisplay);
        } else {
            clearDisplay();
            completedTasksArr.forEach((task) => {
                displayTasks(completedTasksArr, completedTasksArr.indexOf(task), allProjsArr)
            })
        }
        display.setAttribute('class', 'completedtasks');
    }
}