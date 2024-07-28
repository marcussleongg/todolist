export default function clearDisplay() {
    const display = document.querySelector('#display');
    while (display.lastElementChild) {
        display.removeChild(display.lastElementChild);
    }
}