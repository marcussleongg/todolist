import deleteTask from './deleteTask.js'

export default function deleteProj(proj, allProjsArr, allTodoArr) {
    let i = allProjsArr.map(e => e.title).indexOf(proj);
    allProjsArr.splice(i, 1);
    let indexArr = [];
    allTodoArr.forEach((task) => {
        if (task['project'] == proj) {
            indexArr.push(allTodoArr[allTodoArr.indexOf(task)]['title']);
        }
    })
    console.log(indexArr);
    indexArr.forEach((index) => {
        deleteTask(index, allTodoArr);
    })
}