const counterElement = document.querySelector("#counter");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");
let timerId;
let counter = 0;

startBtn.addEventListener("click", function () {
  timerId = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  clearInterval(timerId);
  counterElement.innerText = counter;
});
