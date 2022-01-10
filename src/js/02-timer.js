import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', onStartClick);

let selectedDateMs = 0;
let currentDateMs = 0;
let difference = selectedDateMs - currentDateMs;

const calcuceteTime = selectedDate => {
  const currentDate = new Date();
  selectedDateMs = selectedDate.getTime();
  currentDateMs = currentDate.getTime();
  if (selectedDateMs < currentDateMs) {
    // window.alert('Please choose a date in the future');
    console.log('Please choose a date in the future');
    return;
  }
  startBtn.removeAttribute('disabled');
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    calcuceteTime(selectedDates[0]);
  },
};

flatpickr(inputEl, options);

function onStartClick() {
  let difference = selectedDateMs - currentDateMs;
  const time = convertMs(difference);
  const formatTime = addLeadingZero(time);
  console.log(formatTime);
  let intervalId = setInterval(() => {}, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const days = String(value.days).padStart(2, 0);
  const hours = String(value.hours).padStart(2, 0);
  const minutes = String(value.minutes).padStart(2, 0);
  const seconds = String(value.seconds).padStart(2, 0);
  return { days, hours, minutes, seconds };
}
