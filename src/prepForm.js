export default function prepForm(projDropdown, allProjects) {
    while (projDropdown.lastElementChild) {
        projDropdown.removeChild(projDropdown.lastElementChild);
    }
    allProjects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;
        projDropdown.appendChild(option);
    })
}