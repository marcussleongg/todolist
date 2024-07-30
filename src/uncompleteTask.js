export default function uncompleteTask(task, allTodoArr, completedTasksArr) {
    allTodoArr.push(completedTasksArr[completedTasksArr.map(e => e.title).indexOf(task)]);
    completedTasksArr.splice(completedTasksArr.map(e => e.title).indexOf(task), 1);
}