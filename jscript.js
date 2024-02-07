const converterForm = document.getElementById("converter-form");
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const combination = [
  {
    arabicValue: 1000,
    result: "M",
  },
  {
    arabicValue: 900,
    result: "CM",
  },
  {
    arabicValue: 500,
    result: "D",
  },
  {
    arabicValue: 400,
    result: "CD",
  },
  {
    arabicValue: 100,
    result: "C",
  },
  {
    arabicValue: 90,
    result: "XC",
  },
  {
    arabicValue: 50,
    result: "L",
  },
  {
    arabicValue: 40,
    result: "XL",
  },
  {
    arabicValue: 10,
    result: "X",
  },
  {
    arabicValue: 9,
    result: "IX",
  },
  {
    arabicValue: 5,
    result: "V",
  },
  {
    arabicValue: 4,
    result: "IV",
  },
  {
    arabicValue: 1,
    result: "I",
  },
];

const resultArray = [];

const inputCheck = (input) => {
  if (input < 1 || input === 0) {
    output.classList.add("invalid-input");
    output.innerText = `Please enter a number greater than or equal to 1.`;
    return;
  } else if (!input) {
    output.classList.add("invalid-input");
    output.innerText = `Please enter a valid number.`;
  } else if (input > 3999) {
    output.classList.add("invalid-input");
    output.innerText = `Please enter a number less than or equal to 3999.`;
    return;
  } else {
    output.innerText = "";
  }
};

const convert = (input) => {
  const { arabicValue, result } = combination;
  if (input === 0) {
    return;
  } else {
    const findGreaterThanInput = combination.find(
      ({ arabicValue }) => arabicValue <= input
    );

    convert(input - findGreaterThanInput.arabicValue);
    output.innerText += `${findGreaterThanInput.result}`;
    console.log(findGreaterThanInput);
  }
};

converterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(number.value);
  }
});

convertBtn.addEventListener("click", (numberVal) => {
  numberVal = parseInt(number.value);
  output.classList.remove("hidden");
  inputCheck(numberVal);

  convert(numberVal);
});
