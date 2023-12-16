import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;

  for (let i = 0; i < +amount.value; i++) {
    const ascendantDelay = i * +step.value + +delay.value;
    createPromise(i + 1, ascendantDelay)
      .then(data => Notiflix.Notify.success(data))
      .catch(error => Notiflix.Notify.failure(error));
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
