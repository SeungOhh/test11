const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});