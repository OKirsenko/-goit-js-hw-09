import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const delayEl = document.querySelector('input[name=delay]');
const stepEl = document.querySelector('input[name=step]');
const amountEl = document.querySelector('input[name=amount]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  let delay = +delayEl.value;
  for (let i = 1; i <= amountEl.value; i++) {
    let position = i;
    if (position === 1) {
      delay = delay;
    } else {
      delay += +stepEl.value;
    }
    createPromise(position, delay)
      .then(res => Notiflix.Notify.success(res))
      .catch(err => Notiflix.Notify.failure(err));
  }
}

form.addEventListener('submit', onSubmit);
