import selectFilter from "./filterSelection.js";

export default function displayProj(projects, allTodoArr) {
    const projDiv = document.querySelector('#projects');
    while (projDiv.lastElementChild) {
        projDiv.removeChild(projDiv.lastElementChild);
    }
    projects.forEach((project) => {
        const projDisplay = document.createElement('p');
        projDisplay.innerHTML = project.title;
        //projDisplay.setAttribute('id', project.title);
        let filterStr = `project:${project.title}`;
        projDisplay.addEventListener('click', () => {
            selectFilter(allTodoArr, filterStr, projects);
        })
        projDiv.appendChild(projDisplay);
    })
}