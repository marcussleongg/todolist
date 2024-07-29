export default function toggleExpansion(task) {
    const bottomDisplay = task.lastElementChild;
    console.log(bottomDisplay);
    if (bottomDisplay.style.display == 'none') {
        bottomDisplay.style.display = 'inline';
    } else if (bottomDisplay.style.display == 'inline') {
        bottomDisplay.style.display = 'none';
    }
}