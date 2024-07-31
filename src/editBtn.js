import prepForm from "./prepForm.js";
import editTask from "./editTask.js";
import selectFilter from "./filterSelection.js";
import toggleExpansion from "./toggleExpansion.js";
import { format } from "date-fns";

export default function editBtnFunc(allTodoArr, allProjsArr, completedTasksArr, newTask) {
    const display = document.querySelector('#display');
    const editForm = document.querySelector('#editForm');
    const editDialog = document.querySelector('#editDialog');
    const projectDropdown = document.querySelector('#editProject');
    const allEditBtns = document.querySelectorAll('#editbtn');
    const displayName = document.querySelector('#editName');
    const displayDesc = document.querySelector('#editDesc');
    const displayDuedate = document.querySelector('#editDuedate');
    const displayPriority = document.querySelector('#editPriority');
    const displayProject = document.querySelector('#editProject');
    const completed = document.querySelector('#editComplete');
    //const formBtn = document.querySelector('#editTask');
    const editCloseBtn = document.querySelector('#editCloseBtn');
    allEditBtns.forEach((editBtn) => {
        editBtn.addEventListener('click', () => {
            console.log('edit btn pushed');
            const formBtn = document.querySelector('#editTask');
            toggleExpansion(editBtn.parentNode.parentNode);
            prepForm(projectDropdown, allProjsArr);
            displayName.value = editBtn.parentNode.firstChild.textContent;
            displayDesc.value = editBtn.parentNode.nextSibling.firstChild.textContent;
            displayDuedate.value = editBtn.previousElementSibling.previousElementSibling.textContent.slice(5);
            displayDuedate.setAttribute('min', format(new Date(), "yyyy-MM-dd"))
            displayPriority.value = editBtn.previousElementSibling.textContent.slice(10);
            displayProject.value = editBtn.parentNode.nextSibling.lastChild.textContent.slice(9);
            if (display.className == 'completedtasks') {
                completed.checked = true;
            } else {
                completed.checked = false;
            }
            editForm.removeChild(formBtn);
            const newFormBtn = document.createElement('button');
            newFormBtn.setAttribute('id', 'editTask');
            newFormBtn.innerHTML = 'Edit Task';
            editForm.appendChild(newFormBtn);
            editDialog.showModal();
            //if (newTask != 'newtask') {
                //console.log('i am a new task');
            newFormBtn.addEventListener('click', () => {
                event.preventDefault();
                //console.log(editBtn.parentNode.firstChild.textContent);
                editTask(editBtn.parentNode.firstChild.textContent, document.getElementById('editName').value, document.getElementById('editDesc').value, document.getElementById('editDuedate').value, document.getElementById('editPriority').value, document.getElementById('editProject').value, document.getElementById('editComplete').checked, allTodoArr, completedTasksArr, allProjsArr);
                //selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                editDialog.close();
                editForm.reset();
                //console.log('bruh');
            })
            //}
        })
    })
    editCloseBtn.addEventListener('click', () => {
        editDialog.close();
        editForm.reset();
    })
}