import displayTasks from './displayTasks.js';

export default function selectFilter(allTodoArr, filter) {
    let indexArr = [];
    const body = document.querySelector('body');
    //check for tasks due today and return array of indexes of these tasks
    if (filter.substring(0, filter.indexOf(':')) == 'dueDate') {
        allTodoArr.forEach((todo, index) => {
            if (todo.dueDate == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            const nullTodayDisplay = document.createElement('p');
            nullTodayDisplay.innerHTML = 'No tasks due today';
            body.appendChild(nullTodayDisplay);
        //display tasks which match filter of dueDate:today
        } else {
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i);
            })
        }
        //check for tasks that match the project clicked on and return array of indexes of these tasks
    } else if (filter.substring(0, filter.indexOf(':')) == 'project') {
        allTodoArr.forEach((todo, index) => {
            if (todo.project == filter.substring(filter.indexOf(':') + 1)) {
                indexArr.push(index);
            };
        })
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            const nullProjTasksDisplay = document.createElement('p');
            nullProjTasksDisplay.innerHTML = 'No tasks under this project';
            body.appendChild(nullProjTasksDisplay);
        //display tasks which match filter of project selected
        } else {
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i);
            })
        }
    }
}