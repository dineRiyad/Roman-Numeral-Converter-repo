const converterForm = document.getElementById("converter-form");
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

converterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(number.value);
  }
});

convertBtn.addEventListener("click", () => {
  console.log(number.value);
});
