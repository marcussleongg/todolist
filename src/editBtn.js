export default function editBtnFunc(allTodoArr, index) {
    const taskForm = document.querySelector('#taskForm');
    const taskDialog = document.querySelector('#taskDialog');
    const editButton = document.querySelector('#editbtn');
    const displayName = document.querySelector('#name');
    const displayDesc = document.querySelector('#desc');
    const displayDuedate = document.querySelector('#duedate');
    const displayPriority = document.querySelector('#priority');
    const displayProject = document.querySelector('#project');
    const formBtn = document.querySelector('#addTask');
    editButton.addEventListener('click', () => {
        displayName.value = allTodoArr[index].title;
        displayDesc.value = allTodoArr[index].description;
        //displayDuedate.value = allTodoArr[index].dueDate;
        //displayPriority.value = allTodoArr[index].priority;
        //displayProject.value = allTodoArr[index].project;
        formBtn.innerHTML = 'Edit Task';
        taskDialog.showModal();
    })
}