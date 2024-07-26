export default function completeTask(task, allTodoArr, completedTasksArr) {
    completedTasksArr.push(allTodoArr[allTodoArr.map(e => e.title).indexOf(task)]);
    allTodoArr.splice(allTodoArr.map(e => e.title).indexOf(task), 1);
    console.log(allTodoArr);
    console.log(completedTasksArr);
}