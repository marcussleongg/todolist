import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';

console.log('am i working?');
const projects = [];
const todos = [];
const completed = [];

createProject('todolist', projects);
createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
createTodo('make something bigger', 'i love making', 'tomorrow', 'low', 'todolist', todos);
editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', todos);
completeTask('make something small', todos, completed);

const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const addTaskBtn = document.querySelector('#add');
const dialogBtn = document.querySelector('dialog button');
const projectDropdown = document.querySelector('#project');
addTaskBtn.addEventListener('click', () => {
    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;
        projectDropdown.appendChild(option);
    })
    dialog.showModal();
})
dialogBtn.addEventListener('click', () => {
    dialog.close();
    form.reset();
})