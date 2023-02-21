let num1 = parseInt(prompt("Please enter first number"));
let num2 = parseInt(prompt("Please enter second number"));
if (num1 > num2) {
  document.write(`<p>The bigger of the two numbers was ${num1}</p>`);
} else if (num2 > num1) {
  document.write(`<p>The bigger of the two numbers was ${num2}</p>`);
} else if (num2 === num1) {
  document.write("<p>The numbers were equal</p>");
} else {
  document.write("Pleas enter valid inputs");
}
