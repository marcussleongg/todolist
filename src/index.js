import './style.css';
//import createProject from './createProject.js';
//import createTodo from './createTodo.js';
//import editTask from './editTask.js';
//import deleteTask from './deleteTask.js';
import displayProj from './displayProj.js';
import selectFilter from './filterSelection.js';
import clickOnFilter from './clickOnFilter.js';
import newTaskBtnFunc from './newTaskBtnFunc.js';
import newProjBtnFunc from './newProjBtnFunc.js';
//import editBtnFunc from './editBtn.js';

//console.log('am i working?');
const projects = [];
const todos = [];
const completed = [];

//access local storage to check if any projects and tasks stored
const items = {...localStorage};
if (items.length != 0) {
    for (let key in items) {
        if (JSON.parse(items[key])['description'] == undefined ) {
            projects.push(JSON.parse(items[key]));
        } else if (JSON.parse(items[key])['completed'] == true) {
            completed.push(JSON.parse(items[key]));
        } else {
            todos.push(JSON.parse(items[key]));
        }
    }
}
console.log(items);

//createProject('todolist', projects);
//createProject('build a program', projects);
//createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
//createTodo('make something bigger', 'i love making', 'today', 'Low', 'todolist', todos);
//editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', false, todos, completed);
//completeTask('make something small', todos, completed);
selectFilter(todos, 'alltasks', projects, completed);
clickOnFilter(todos, completed, projects);
newTaskBtnFunc(projects, todos, completed);
newProjBtnFunc(projects, todos, completed);
displayProj(projects, todos, completed);
//editBtnFunc(todos, projects, completed);

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  if (storageAvailable("localStorage")) {
    console.log('Yippee! We can use localStorage awesomeness');
  } else {
    console.log('Too bad, no localStorage for us');
  }