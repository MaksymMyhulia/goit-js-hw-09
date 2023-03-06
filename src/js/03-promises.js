import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

form.addEventListener('submit', onFormSubmit)

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

function onFormSubmit(event) {
   event.preventDefault();
   
   const {delay, step, amount} = event.currentTarget.elements;
   let inputDelay = Number(delay.value);
   let inputStep = Number(step.value);
   let inputAmount = Number(amount.value);
   form.reset();
   for (let i = 1; i <= inputAmount; i++) {
    
    createPromise(i, inputDelay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      //window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
     //window.alert(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    inputDelay += inputStep;
    }
}

