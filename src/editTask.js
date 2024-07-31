import completeTask from './completeTask.js';
import uncompleteTask from './uncompleteTask.js';
import selectFilter from "./filterSelection.js";

export default function editTask(task, newTitle, newDescription, newDueDate, newPriority, newProject, newCompleted, allTodoArr, completedTasksArr, allProjsArr) {
    const display = document.querySelector('#display');
    if (display.className == 'completedtasks') {
        const completedTaskIndex = completedTasksArr.map(e => e.title).indexOf(task);
        console.log(task);
        console.log(completedTasksArr[0]);
        //why is the code here running twice, and the first round using the old task name from the previous round
        console.log(completedTasksArr);
        completedTasksArr[completedTaskIndex]['title'] = newTitle;
        completedTasksArr[completedTaskIndex]['description'] = newDescription;
        completedTasksArr[completedTaskIndex]['dueDate'] = newDueDate;
        completedTasksArr[completedTaskIndex]['priority'] = newPriority;
        completedTasksArr[completedTaskIndex]['project'] = newProject;
        completedTasksArr[completedTaskIndex]['completed'] = newCompleted;
        if (completedTasksArr[completedTaskIndex]['completed'] == false) {
            //right now the problem seems to be that the new array values are not registered in the global scope, hence the values used in other functions are not these updated ones but instead the old unupdated ones
            allTodoArr.push(completedTasksArr[completedTasksArr.map(e => e.title).indexOf(newTitle)]);
            completedTasksArr.splice(completedTasksArr.map(e => e.title).indexOf(newTitle), 1);
        }
        selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
    } else {
        console.log(completedTasksArr);
        const taskIndex = allTodoArr.map(e => e.title).indexOf(task);
        console.log(taskIndex);
        console.log(allTodoArr[taskIndex])
        allTodoArr[taskIndex]['title'] = newTitle;
        allTodoArr[taskIndex]['description'] = newDescription;
        allTodoArr[taskIndex]['dueDate'] = newDueDate;
        allTodoArr[taskIndex]['priority'] = newPriority;
        allTodoArr[taskIndex]['project'] = newProject;
        allTodoArr[taskIndex]['completed'] = newCompleted;
        console.log(allTodoArr[taskIndex]);
        if (allTodoArr[taskIndex]['completed'] == true) {
            console.log(allTodoArr[allTodoArr.map(e => e.title).indexOf(newTitle)]);
            completedTasksArr.push(allTodoArr[allTodoArr.map(e => e.title).indexOf(newTitle)]);
            console.log(completedTasksArr[0]);
            allTodoArr.splice(allTodoArr.map(e => e.title).indexOf(newTitle), 1);
        }
        selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
    }
    console.log(allTodoArr);
    console.log(completedTasksArr);
    console.log(completedTasksArr[0]);
}