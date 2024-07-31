import displayTasks from './displayTasks.js';
import clearDisplay from './clearDisplay.js';

export default function selectFilter(allTodoArr, filter, allProjsArr, completedTasksArr) {
    let indexArr = [];
    const display = document.querySelector('#display');
    const displayFilter = document.createElement('h1');
    //check for tasks due today and return array of indexes of these tasks
    if (filter.substring(0, filter.indexOf(':')) == 'dueDate') {
        display.setAttribute('class', filter);
        allTodoArr.forEach((todo, index) => {
            if (todo.dueDate == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            clearDisplay();
            displayFilter.innerHTML = 'Due Today';
            display.appendChild(displayFilter);
            const nullTodayDisplay = document.createElement('p');
            nullTodayDisplay.innerHTML = 'No tasks due today';
            display.appendChild(nullTodayDisplay);
        //display tasks which match filter of dueDate:today's date
        } else {
            clearDisplay();
            displayFilter.innerHTML = 'Due Today';
            display.appendChild(displayFilter);
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i, allProjsArr, completedTasksArr, allTodoArr);
            })
        }
        //check for tasks that match the project clicked on and return array of indexes of these tasks
    } else if (filter.substring(0, filter.indexOf(':')) == 'project') {
        display.setAttribute('class', filter);
        allTodoArr.forEach((todo, index) => {
            if (todo.project == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            clearDisplay();
            displayFilter.innerHTML = filter.substring(filter.indexOf(':') + 1);
            display.appendChild(displayFilter);
            const nullProjTasksDisplay = document.createElement('p');
            nullProjTasksDisplay.innerHTML = 'No tasks under this project';
            display.appendChild(nullProjTasksDisplay);
        //display tasks which match filter of project selected
        } else {
            clearDisplay();
            displayFilter.innerHTML = filter.substring(filter.indexOf(':') + 1);
            display.appendChild(displayFilter);
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i, allProjsArr, completedTasksArr, allTodoArr);
        })
        }
    } else if (filter == 'alltasks') {
        display.setAttribute('class', 'alltasks');
        if (allTodoArr.length == 0) {
            clearDisplay();
            displayFilter.innerHTML = 'All Tasks';
            display.appendChild(displayFilter);
            const nullTasksDisplay = document.createElement('p');
            nullTasksDisplay.innerHTML = 'No tasks created yet';
            display.appendChild(nullTasksDisplay);
        } else {
            clearDisplay();
            displayFilter.innerHTML = 'All Tasks';
            display.appendChild(displayFilter);
            allTodoArr.forEach((task) => {
                displayTasks(allTodoArr, allTodoArr.indexOf(task), allProjsArr, completedTasksArr, allTodoArr);
            })
        }
    } else if (filter == 'completedtasks') {
        display.setAttribute('class', 'completedtasks');
        if (completedTasksArr.length == 0) {
            clearDisplay();
            displayFilter.innerHTML = 'Completed Tasks';
            display.appendChild(displayFilter);
            const nullCompletedTasksDisplay = document.createElement('p');
            nullCompletedTasksDisplay.innerHTML = 'No tasks completed yet';
            display.appendChild(nullCompletedTasksDisplay);
        } else {
            clearDisplay();
            displayFilter.innerHTML = 'Completed Tasks';
            display.appendChild(displayFilter);
            completedTasksArr.forEach((task) => {
                displayTasks(completedTasksArr, completedTasksArr.indexOf(task), allProjsArr, completedTasksArr, allTodoArr);
            })
        }
    }
}