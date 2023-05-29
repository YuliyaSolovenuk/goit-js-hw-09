 import flatpickr from "flatpickr";
 import "flatpickr/dist/flatpickr.min.css";
 import Notiflix from 'notiflix';

   const timerInputEl = document.querySelector('#datetime-picker')
   
   const buttonEl = document.querySelector('button')

    const dateElements = {
        days: document.querySelector('.value[data-days]'),
        hours: document.querySelector('.value[data-hours]'),
        minutes: document.querySelector('.value[data-minutes]'),
        seconds: document.querySelector('.value[data-seconds]')
    }
    
    let timerId = null;
    buttonEl.disabled = true;

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,

        onClose(selectedDates) {

            const selectedDate = selectedDates[0].getTime()
            const dateNow = Date.now()
        
            if(selectedDate < dateNow){
            // alert("Please choose a date in the future")

                Notiflix.Notify.failure("Please choose a date in the future");
                return
            }

            buttonEl.disabled = false;   
        }
    };
  
  const fp = flatpickr(timerInputEl, options); 
  console.log(fp);
  

  buttonEl.addEventListener('click', onClick)
   

  function onClick (e) {

    countdownTimer.start()
    buttonEl.disabled = true;
    timerInputEl.disabled = true;

  }

 const countdownTimer = {
    start() {
        
        let dateFromCalendar = new Date(timerInputEl.value).getTime()

        timerId = setInterval(() =>{

            let currentDate = String(Date.now())

            let deltaTime = dateFromCalendar - currentDate
           const { days, hours, minutes, seconds } = convertMs(deltaTime)
        
            dateElements.days.textContent = addLeadingZero(days)
            dateElements.hours.textContent = addLeadingZero(hours)
            dateElements.minutes.textContent = addLeadingZero(minutes)
            dateElements.seconds.textContent = addLeadingZero(seconds) 
            
            if(!days && !hours && !minutes && !seconds) {
                clearInterval(timerId)
                console.log('yes');
            }

        }, 1000)
       
    },

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
  
      

  function  addLeadingZero(value) {

    return String(value).padStart(2, 0);

  }
  