const display = document.querySelector(".calculator__display");

// * Define display function
const render = (value) => {
  display.value = value;
};

// Const check if error is displayed
const checkError = () => {
  if (display.value === "Infinity" || display.value === "NaN") {
    return true;
  } else {
    return false;
  }
};

// * Define math functions
const fact = (n) => {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else {
    return n * fact(n - 1);
  }
};

// * Calculator functions
const equal = (value) => {
  try {
    value = Math.floor(eval(value) * 100) / 100;
    console.log(value);

    if (value === Infinity || value === NaN) {
      value = "";
      render(value);
      display.placeholder = "Error";
      return value;
    } else {
      render(value);
      return value;
    }
  } catch (e) {
    value = "";
    render(value);
    display.placeholder = "Error";
    return value;
  }
};

const clearAll = () => {
  render("");
  return "";
};

const backspace = (value) => {
  value = display.value.slice(0, -1);
  render(value);
  return value;
};

const sqr = (value) => {
  if (checkError()) {
    value = "";
    render(value);
    return value;
  } else {
    value = eval(Math.pow(value, 2));
    render(value);
    return value;
  }
};

const sqrt = (value) => {
  value = Math.floor(Math.sqrt(value) * 100) / 100;
  render(value);
  return value;
};

const factorial = (value) => {
  value = Math.floor(fact(value) * 100) / 100;
  render(value);
  return value;
};

export { clearAll, sqr, sqrt, backspace, equal, render, factorial };
