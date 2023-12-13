const btn_start = document.querySelector('button[data-start]');
const btn_stop = document.querySelector('button[data-stop]');

btn_stop.disabled = true;
let idInterval;

function startColorChange() {
  btn_start.disabled = true;
  btn_stop.disabled = false;
  changeColor();

  idInterval = setInterval(changeColor, 1000);
}

function stopColorChange() {
  btn_stop.disabled = true;
  btn_start.disabled = false;
  clearInterval(idInterval);
}
function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn_start.addEventListener('click', startColorChange);
btn_stop.addEventListener('click', stopColorChange);
