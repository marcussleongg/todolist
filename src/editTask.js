import selectFilter from "./filterSelection.js";

export default function editTask(task, newTitle, newDescription, newDueDate, newPriority, newProject, newCompleted, allTodoArr, completedTasksArr, allProjsArr) {
    const display = document.querySelector('#display');
    if (display.className == 'completedtasks') {
        const completedTaskIndex = completedTasksArr.map(e => e.title).indexOf(task);
        //amend details of the task
        completedTasksArr[completedTaskIndex]['title'] = newTitle;
        completedTasksArr[completedTaskIndex]['description'] = newDescription;
        completedTasksArr[completedTaskIndex]['dueDate'] = newDueDate;
        completedTasksArr[completedTaskIndex]['priority'] = newPriority;
        completedTasksArr[completedTaskIndex]['project'] = newProject;
        completedTasksArr[completedTaskIndex]['completed'] = newCompleted;
        if (completedTasksArr[completedTaskIndex]['completed'] == false) {
            //moving tasks to different arrays
            allTodoArr.push(completedTasksArr[completedTasksArr.map(e => e.title).indexOf(newTitle)]);
            completedTasksArr.splice(completedTasksArr.map(e => e.title).indexOf(newTitle), 1);
        }
        selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
    } else {
        const taskIndex = allTodoArr.map(e => e.title).indexOf(task);
        allTodoArr[taskIndex]['title'] = newTitle;
        allTodoArr[taskIndex]['description'] = newDescription;
        allTodoArr[taskIndex]['dueDate'] = newDueDate;
        allTodoArr[taskIndex]['priority'] = newPriority;
        allTodoArr[taskIndex]['project'] = newProject;
        allTodoArr[taskIndex]['completed'] = newCompleted;
        if (allTodoArr[taskIndex]['completed'] == true) {
            completedTasksArr.push(allTodoArr[allTodoArr.map(e => e.title).indexOf(newTitle)]);
            allTodoArr.splice(allTodoArr.map(e => e.title).indexOf(newTitle), 1);
        }
        selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
    }
}