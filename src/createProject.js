export default function createProject(title, projectsArr) {
    class Project {
        constructor(title) {
            this.title = title;
        }
    }
    projectsArr.push(new Project(title));
    console.log(projectsArr[0]['title']);
}