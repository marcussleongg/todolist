import prepForm from "./prepForm.js";

export default function editBtnFunc(allTodoArr, index, allProjsArr) {
    const editForm = document.querySelector('#editForm');
    const editDialog = document.querySelector('#editDialog');
    const projectDropdown = document.querySelector('#editProject');
    const editBtn = document.querySelector('#editbtn');
    const displayName = document.querySelector('#editName');
    const displayDesc = document.querySelector('#editDesc');
    const displayDuedate = document.querySelector('#editDuedate');
    const displayPriority = document.querySelector('#editPriority');
    const displayProject = document.querySelector('#editProject');
    const formBtn = document.querySelector('#editTask');
    const editCloseBtn = document.querySelector('#editCloseBtn');
    editBtn.addEventListener('click', () => {
        prepForm(projectDropdown, allProjsArr);
        displayName.value = allTodoArr[index].title;
        displayDesc.value = allTodoArr[index].description;
        displayDuedate.value = allTodoArr[index].dueDate;
        displayPriority.value = allTodoArr[index].priority;
        displayProject.value = allTodoArr[index].project;
        editDialog.showModal();
    })
    editCloseBtn.addEventListener('click', () => {
        editDialog.close();
        editForm.reset();
    })
    formBtn.addEventListener('click', () => {
        event.preventDefault();
        //createTodo(document.getElementById('name').value, document.getElementById('desc').value, document.getElementById('duedate').value, document.getElementById('priority').value, document.getElementById('project').value, allTodoArr);
        editDialog.close();
        editForm.reset();
    })
}