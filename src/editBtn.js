import prepForm from "./prepForm.js";
import editTask from "./editTask.js";
import selectFilter from "./filterSelection.js";

export default function editBtnFunc(allTodoArr, index, allProjsArr, completedTasksArr) {
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
    const formBtn = document.querySelector('#editTask');
    const editCloseBtn = document.querySelector('#editCloseBtn');
    allEditBtns.forEach((editBtn) => {
        editBtn.addEventListener('click', () => {
            prepForm(projectDropdown, allProjsArr);
            displayName.value = editBtn.parentNode.firstChild.textContent;
            displayDesc.value = editBtn.previousElementSibling.textContent;
            displayDuedate.value = editBtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            displayPriority.value = editBtn.previousElementSibling.previousElementSibling.textContent;
            displayProject.value = editBtn.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            editDialog.showModal();
            formBtn.addEventListener('click', () => {
                event.preventDefault();
                editTask(editBtn.parentNode.firstChild.textContent, document.getElementById('editName').value, document.getElementById('editDesc').value, document.getElementById('editDuedate').value, document.getElementById('editPriority').value, document.getElementById('editProject').value, allTodoArr);
                selectFilter(allTodoArr, display.className, allProjsArr, completedTasksArr);
                editDialog.close();
                editForm.reset();
            })
        })
    })
    editCloseBtn.addEventListener('click', () => {
        editDialog.close();
        editForm.reset();
    })
}