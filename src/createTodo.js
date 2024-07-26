export default function createTodo(title, description, dueDate, priority, project, allTodoArr) {
    class ToDo {
        constructor(title, description, dueDate, priority, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.project = project;
        }
    }
    allTodoArr.push(new ToDo(title, description, dueDate, priority, project));
    console.log(allTodoArr);
}