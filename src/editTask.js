export default function editTask(task, newTitle, newDescription, newDueDate, newPriority, newProject, allTodoArr) {
    const taskIndex = allTodoArr.map(e => e.title).indexOf(task);
    allTodoArr[taskIndex]['title'] = newTitle;
    allTodoArr[taskIndex]['description'] = newDescription;
    allTodoArr[taskIndex]['dueDate'] = newDueDate;
    allTodoArr[taskIndex]['priority'] = newPriority;
    allTodoArr[taskIndex]['project'] = newProject;
    console.log(allTodoArr);
}