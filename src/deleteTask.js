export default function deleteTask(task, allTodoArr) {
    allTodoArr.splice(allTodoArr.map(e => e.title).indexOf(task), 1);
    console.log(allTodoArr);
}