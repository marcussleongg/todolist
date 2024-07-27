export default function displayProj(projects) {
    const projDiv = document.querySelector('#projects');
    while (projDiv.lastElementChild) {
        projDiv.removeChild(projDiv.lastElementChild);
    }
    projects.forEach((project) => {
        const projDisplay = document.createElement('p');
        projDisplay.innerHTML = project.title;
        projDiv.appendChild(projDisplay);
    })
}