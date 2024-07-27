import selectFilter from './filterSelection.js';

export default function clickOnFilter(allTodoArr) {
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, 'dueDate:today');
    })
}