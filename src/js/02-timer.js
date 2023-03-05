import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const remainderOfdays = document.querySelector('span[data-days]');
const remainderOfhours = document.querySelector('span[data-hours]');
const remainderOfminutes = document.querySelector('span[data-minutes]');
const remainderOfseconds = document.querySelector('span[data-seconds]');
const DELAY = 1000;
let intervalId = null;
let currentDate = null;
let selectedDate = null;


button.disabled = true;
button.addEventListener('click', timerStart);

let remainderOfTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      chooseDay(selectedDates)
    },
  };

  flatpickr(input , options);

function chooseDay (selectedDates)  {
  currentDate = new Date ().getTime;
  selectedDate = selectedDates[0].getTime();
  
  if (currentDate > selectedDate) {
    window.alert("Please choose a date in the future");
    return;
} else {
    button.disabled = false;
}
}

function timerStart() {
  intervalId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate <= 1000) {
      clearInterval(intervalId);
      button.disabled = true;
      input.disabled = false;
      window.alert("Timer stopped!")
    } else {
      button.disabled = true;
      input.disabled = false;
      currentDate += 1000; 
      remainderOfTime = selectedDate - currentDate;
      convertMs(remainderOfTime)
    }
  }, DELAY);
}

function createMarkup ( { days, hours, minutes, seconds } ) {
  remainderOfdays.textContent = days;
  remainderOfhours.textContent = hours;
  remainderOfminutes.textContent = minutes;
  remainderOfseconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    createMarkup( { days, hours, minutes, seconds } );

    return { days, hours, minutes, seconds };
  }


