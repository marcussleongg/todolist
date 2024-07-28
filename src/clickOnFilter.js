import selectFilter from './filterSelection.js';

export default function clickOnFilter(allTodoArr) {
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, 'dueDate:today');
    })
}

// how am i going to add event listeners to the display of projects, when the projects are changing/can be added