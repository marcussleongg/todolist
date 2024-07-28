import './style.css';
import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import displayProj from './displayProj.js';
import selectFilter from './filterSelection.js';
import clickOnFilter from './clickOnFilter.js';
import newTaskBtnFunc from './newTaskBtnFunc.js';
import newProjBtnFunc from './newProjBtnFunc.js';

console.log('am i working?');
const projects = [];
const todos = [];
const completed = [];

createProject('todolist', projects);
createProject('build a program', projects);
createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
createTodo('make something bigger', 'i love making', 'today', 'Low', 'todolist', todos);
editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', todos);
completeTask('make something small', todos, completed);
displayProj(projects, todos);
selectFilter(todos, 'project:todolist', projects);
clickOnFilter(todos, completed, projects);
newTaskBtnFunc(projects, todos);
newProjBtnFunc(projects, todos);