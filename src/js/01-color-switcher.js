function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let idInterval = null;
const DELAY = 1000;

stopButton.disabled = true;
startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick () {
startButton.disabled = true;
stopButton.disabled = false;
idInterval = setInterval(function changeBackground () {
    body.style.backgroundColor = getRandomHexColor();
}, DELAY);
};

function onStopButtonClick () {
    startButton.disabled = false;
    stopButton.disabled = true;
    startButton.removeAttribute('disabled');
    clearInterval(idInterval);
};
