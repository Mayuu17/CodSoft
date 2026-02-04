const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    // Symbol mapping for eval
    if (value === "×") value = "*";
    if (value === "÷") value = "/";
    if (value === "−") value = "-";

    if (!isNaN(value) || value === ".") {
      expression += value;
      display.value = expression;
    }

    else if (value === "C") {
      expression = "";
      display.value = "";
    }

    else if (value === "=") {
      try {
        const result = eval(expression);
        display.value = expression + " = " + result;
        expression = result.toString();
      } catch {
        display.value = "Error";
        expression = "";
      }
    }

    else {
      // operators + - * /
      expression += value;
      display.value = expression;
    }
  });
});