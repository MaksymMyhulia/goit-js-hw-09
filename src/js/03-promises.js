const form = document.querySelector(".form");

form.addEventListener('click', onCreatePromises)

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

function onCreatePromises(event) {
   event.preventDefault();
   const {delay, step, amount} = event.currentTarget.elements;
   let inputDelay = Number(delay.value);
   let inputStep = Number(step.value);
   let inputAmount = Number(amount.value);

   for (let i = 1; i <= inputAmount; i++) {
    inputDelay += inputStep;
    
    createPromise(i, inputDelay)
    .then(({ position, delay }) => {
      window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
     window.alert(`❌ Rejected promise ${position} in ${delay}ms`);
    });
   }
}
