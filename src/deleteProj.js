import deleteTask from './deleteTask.js'

export default function deleteProj(proj, allProjsArr, allTodoArr) {
    let i = allProjsArr.map(e => e.title).indexOf(proj);
    allProjsArr.splice(i, 1);
    let toDeleteArr = [];
    allTodoArr.forEach((task) => {
        if (task['project'] == proj) {
            toDeleteArr.push(allTodoArr[allTodoArr.indexOf(task)]['title']);
        }
    })
    toDeleteArr.forEach((toDeleteTask) => {
        deleteTask(toDeleteTask, allTodoArr);
    })
}