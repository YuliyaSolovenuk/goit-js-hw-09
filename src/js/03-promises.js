import Notiflix from 'notiflix';


const form = document.querySelector(".form");
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  
  let delay = Number(inputDelay.value)
  let position = Number(inputAmount.value)
  const delayStep = Number(inputStep.value)

  
    for(let positionIndex=1; positionIndex<=position; positionIndex+=1) {
    
       
    createPromise(position, delay)
    
    .then(({ position, delay }) => {
      
      Notiflix.Notify.success(`✅ Fulfilled promise ${positionIndex} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      
      Notiflix.Notify.failure(`❌ Rejected promise ${positionIndex} in ${delay}ms`)
    })

    delay+=delayStep;
  }

}



function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });

}

