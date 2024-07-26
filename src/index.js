import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';
import editTask from './editTask.js';

console.log('am i working?');
const projects = [];
const todos = [];

createProject('todolist', projects);
createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
createTodo('make something bigger', 'i love making', 'tomorrow', 'low', 'todolist', todos);
editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', todos);
completeTask('make something small', todos);