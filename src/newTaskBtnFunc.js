import createTodo from './createTodo.js';
import prepForm from './prepForm.js';

export default function newTaskBtnFunc(allProjsArr, allTodoArr) {
    const newTaskBtn = document.querySelector('#newTask');
    const taskForm = document.querySelector('#taskForm');
    const taskDialog = document.querySelector('#taskDialog');
    const projectDropdown = document.querySelector('#project');
    const taskBtn = document.querySelector('#taskBtn');
    const addTaskBtn = document.querySelector('#addTask');
    newTaskBtn.addEventListener('click', () => {
        prepForm(projectDropdown, allProjsArr);
        taskDialog.showModal();
    })
    taskBtn.addEventListener('click', () => {
        taskDialog.close();
        taskForm.reset();
    })
    addTaskBtn.addEventListener('click', () => {
        event.preventDefault();
        createTodo(document.getElementById('name').value, document.getElementById('desc').value, document.getElementById('duedate').value, document.getElementById('priority').value, document.getElementById('project').value, allTodoArr);
        taskDialog.close();
        taskForm.reset();
    })
}