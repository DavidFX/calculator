import {
  clearAll,
  sqr,
  sqrt,
  backspace,
  equal,
  render,
  factorial,
} from "./functions.js";

const keys = document.querySelectorAll(".key");

let expression = "";

// Add event listeners to each key
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    const action = e.target.dataset.action;

    if (action === "equal") {
      expression = equal(expression);
    } else if (action === "clear") {
      expression = backspace(expression);
    } else if (action === "clear-all") {
      expression = clearAll();
    } else if (action === "sqr") {
      expression = sqr(expression);
    } else if (action === "sqrt") {
      expression = sqrt(expression);
    } else if (action === "factorial") {
      expression = factorial(expression);
    } else {
      expression += value;
      render(expression);
    }
  });
});
