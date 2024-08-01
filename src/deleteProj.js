import deleteTask from './deleteTask.js'

export default function deleteProj(proj, allProjsArr, allTodoArr) {
    console.log(allTodoArr.length);
    let indexArr = [];
    allTodoArr.forEach((task) => {
        if (task['project'] == proj) {
            indexArr.push(allTodoArr.indexOf(task));
        }
    })
    indexArr.forEach((index) => {
        deleteTask(allTodoArr[index], allTodoArr);
    })
    allProjsArr.splice(allProjsArr.indexOf(proj), 1);
}