import selectFilter from "./filterSelection.js";

export default function displayProj(allProjsArr, allTodoArr, completedTasksArr) {
    const projDiv = document.querySelector('#projects');
    while (projDiv.lastElementChild) {
        projDiv.removeChild(projDiv.lastElementChild);
    }
    allProjsArr.forEach((project) => {
        const projDisplay = document.createElement('p');
        projDisplay.innerHTML = project.title;
        //projDisplay.setAttribute('id', project.title);
        let filterStr = `project:${project.title}`;
        projDisplay.addEventListener('click', () => {
            selectFilter(allTodoArr, filterStr, allProjsArr, completedTasksArr);
        })
        projDiv.appendChild(projDisplay);
    })
}