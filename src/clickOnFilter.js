import selectFilter from './filterSelection.js';
import { format } from "date-fns";
import clearDisplay from './clearDisplay.js';

export default function clickOnFilter(allTodoArr) {
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        clearDisplay();
        selectFilter(allTodoArr, `dueDate:${format(new Date(), "yyyy-MM-dd")}`);
    })
}