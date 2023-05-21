
const BtnStartEl = document.querySelector('[data-start]')
console.log(BtnStartEl)

const BtnStopEl = document.querySelector('[data-stop]')
console.log(BtnStopEl)

const bodyEl = document.body;
console.log(bodyEl)

let timerId = null;
disabled = false;

BtnStartEl.addEventListener('click', onChangeBgcolor)

BtnStopEl.addEventListener('click', offChangeBgcolor)



function onChangeBgcolor(e) {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
        
    }, 1000)
    BtnStartEl.disabled = true;
}

function offChangeBgcolor(e) {
    clearInterval(timerId);
    BtnStartEl.disabled = false;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }