export default function createProject(title, projectsArr) {
    class Project {
        constructor(title) {
            this.title = title;
        }
    }
    let newProj = new Project(title);
    projectsArr.push(newProj);
    localStorage.setItem(newProj.title, JSON.stringify(newProj));
}