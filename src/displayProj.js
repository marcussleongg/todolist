import selectFilter from "./filterSelection.js";
import clearDisplay from './clearDisplay.js';

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
            clearDisplay();
            selectFilter(allTodoArr, filterStr);
        })
        projDiv.appendChild(projDisplay);
    })
}