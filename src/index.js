import createProject from './createProject.js';

console.log('am i working?');
const projects = [];

class ToDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

createProject('todolist', projects);