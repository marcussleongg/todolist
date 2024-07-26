import createProject from './createProject.js';
import createTodo from './createTodo.js';
import completeTask from './completeTask.js';

console.log('am i working?');
const projects = [];
const todos = [];

createProject('todolist', projects);
createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
createTodo('make something bigger', 'i love making', 'tomorrow', 'low', 'todolist', todos);
completeTask('make something bigger', todos);