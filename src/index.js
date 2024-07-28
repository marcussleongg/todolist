import './style.css';
import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import displayProj from './displayProj.js';
import selectFilter from './filterSelection.js';
import clickOnFilter from './clickOnFilter.js';

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
displayProj(projects, todos);
selectFilter(todos, 'project:todolist');
clickOnFilter(todos);

const newTaskBtn = document.querySelector('#newTask');
const taskForm = document.querySelector('#taskForm');
const taskDialog = document.querySelector('#taskDialog');
const taskBtn = document.querySelector('#taskBtn');
const projectDropdown = document.querySelector('#project');
const newProjBtn = document.querySelector('#newProj');
const projForm = document.querySelector('#projForm');
const projDialog = document.querySelector('#projDialog');
const projBtn = document.querySelector('#projBtn');
const addTaskBtn = document.querySelector('#addTask');
const addProjBtn = document.querySelector('#addProj');
newTaskBtn.addEventListener('click', () => {
    while (projectDropdown.lastElementChild) {
        projectDropdown.removeChild(projectDropdown.lastElementChild);
    }
    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;
        projectDropdown.appendChild(option);
    })
    taskDialog.showModal();
})
taskBtn.addEventListener('click', () => {
    taskDialog.close();
    taskForm.reset();
})
newProjBtn.addEventListener('click', () => {
    projDialog.showModal();
})
projBtn.addEventListener('click', () => {
    projDialog.close();
    projForm.reset();
})
addTaskBtn.addEventListener('click', () => {
    event.preventDefault();
    createTodo(document.getElementById('name').value, document.getElementById('desc').value, document.getElementById('duedate').value, document.getElementById('priority').value, document.getElementById('project').value, todos);
    taskDialog.close();
    taskForm.reset();
})
addProjBtn.addEventListener('click', () => {
    event.preventDefault();
    createProject(document.getElementById('title').value, projects);
    displayProj(projects, todos);
    projDialog.close();
    projForm.reset();
})