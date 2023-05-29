
const BtnStartEl = document.querySelector('[data-start]')

const BtnStopEl = document.querySelector('[data-stop]')

const bodyEl = document.body;

let timerId = null;
disabled = false;

BtnStartEl.addEventListener('click', onChangeBgcolor)

BtnStopEl.addEventListener('click', offChangeBgcolor)



function onChangeBgcolor(e) {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
        
    }, 1000)
    BtnStartEl.disabled = true;
    BtnStopEl.disabled = false;
}

function offChangeBgcolor(e) {
    clearInterval(timerId);
    BtnStartEl.disabled = false;
    BtnStopEl.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }