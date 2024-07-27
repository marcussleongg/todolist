export default function displayProj(projects) {
    projects.forEach((project) => {
        const projDisplay = document.createElement('p');
        const body = document.querySelector('body');
        projDisplay.innerHTML = project.title;
        body.appendChild(projDisplay);
    })
}