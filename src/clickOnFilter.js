import selectFilter from './filterSelection.js';
import { format } from "date-fns";

export default function clickOnFilter(allTodoArr) {
    const dueToday = document.querySelector('#dueToday');
    dueToday.addEventListener('click', () => {
        selectFilter(allTodoArr, `dueDate:${format(new Date(), "yyyy-MM-dd")}`);
    })
}