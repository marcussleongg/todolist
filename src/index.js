import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import displayProj from './displayProj.js';
import selectFilter from './filterSelection.js';

console.log('am i working?');
const projects = [];
const todos = [];
const completed = [];

createProject('todolist', projects);
createProject('build a program', projects);
createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
createTodo('make something bigger', 'i love making', 'today', 'low', 'todolist', todos);
editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', todos);
completeTask('make something small', todos, completed);
displayProj(projects);
selectFilter(todos, 'project:todolist');

const taskForm = document.querySelector('#taskForm');
const taskDialog = document.querySelector('#taskDialog');
const addTaskBtn = document.querySelector('#newTask');
const taskDialogBtn = document.querySelector('#taskBtn');
const projectDropdown = document.querySelector('#project');
addTaskBtn.addEventListener('click', () => {
    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;
        projectDropdown.appendChild(option);
    })
    taskDialog.showModal();
})
taskDialogBtn.addEventListener('click', () => {
    taskDialog.close();
    taskForm.reset();
})