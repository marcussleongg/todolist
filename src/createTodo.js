export default function createTodo(title, description, dueDate, priority, project, allTodoArr) {
    class ToDo {
        constructor(title, description, dueDate, priority, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.project = project;
            this.completed = false;
        }
    }
    let newTask = new ToDo(title, description, dueDate, priority, project)
    allTodoArr.push(newTask);
    localStorage.setItem(newTask.title, JSON.stringify(newTask));
}