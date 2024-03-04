let counter = 0;

const incrementBtn = document.querySelector("#incrementBtn");
const counterValue = document.querySelector("#counterValue");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

// To increment the value of counter
incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener("click", () => {
  if (counter !== 0) {
    counter--;
    counterValue.innerHTML = counter;
  }
});

// To reset the value of counter
resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.innerHTML = counter;
});
