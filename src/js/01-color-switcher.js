const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(bodyEl.style.backgroundColor);
};

const onStartClick = () => {
  intervalId = setInterval(changeColor, 1000);
  startBtn.setAttribute('disabled', 'disabled');
};

const onStopClick = () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
};

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
