import displayTasks from './displayTasks.js'

export default function selectFilter(allTodoArr, filter) {
    let indexArr;
    const body = document.querySelector('body');
    //check for tasks due today and return array of indexes of these tasks
    if (filter.substring(0, filter.indexOf(':')) == 'dueDate') {
        allTodoArr.reduce((arr, e, index) => {
            if (e.dueDate == 'today') {
                arr.push(index);
            };
            indexArr = arr;
        }, [])
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
        allTodoArr.reduce((arr, e, index) => {
            if (e.project == filter.substring(filter.indexOf(':') + 1)) {
                arr.push(index);
            };
            indexArr = arr;
        }, [])
        //display of string if no tasks match filter
        if (indexArr.length == 0) {
            const nullTodayDisplay = document.createElement('p');
            nullTodayDisplay.innerHTML = 'No tasks under this project';
            body.appendChild(nullTodayDisplay);
        //display tasks which match filter of project selected
        } else {
            indexArr.forEach((i) => {
                displayTasks(allTodoArr, i);
            })
        }
    }
}