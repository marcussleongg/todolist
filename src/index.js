import './style.css';
//import createProject from './createProject.js';
//import createTodo from './createTodo.js';
//import editTask from './editTask.js';
//import deleteTask from './deleteTask.js';
//import displayProj from './displayProj.js';
import selectFilter from './filterSelection.js';
import clickOnFilter from './clickOnFilter.js';
import newTaskBtnFunc from './newTaskBtnFunc.js';
import newProjBtnFunc from './newProjBtnFunc.js';
//import editBtnFunc from './editBtn.js';

//console.log('am i working?');
const projects = [];
const todos = [];
const completed = [];

//createProject('todolist', projects);
//createProject('build a program', projects);
//createTodo('make something', 'make it asap', 'today', 'high', 'todolist', todos);
//createTodo('make something bigger', 'i love making', 'today', 'Low', 'todolist', todos);
//editTask('make something', 'make something small', 'make it quickly', 'today at night', 'medium', 'todolist', false, todos, completed);
//completeTask('make something small', todos, completed);
//displayProj(projects, todos);
selectFilter(todos, 'alltasks', projects, completed);
clickOnFilter(todos, completed, projects);
newTaskBtnFunc(projects, todos, completed);
newProjBtnFunc(projects, todos, completed);
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