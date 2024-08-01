export default function deleteTask(task, arr) {
    arr.splice(arr.map(e => e.title).indexOf(task), 1);
    localStorage.removeItem(task);
}