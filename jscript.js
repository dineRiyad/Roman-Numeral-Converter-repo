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
let convertArr = [];

const convert = (input) => {
  if (input === 0) {
    return;
  } else {
    const findValue = combination.find(
      ({ arabicValue }) => arabicValue <= input
    );

    convert(input - findValue.arabicValue);
    convertArr.unshift(findValue);
  }
};

const inputConversion = (input) => {
  if (input >= 1) {
    convert(input);
    let i = 0;
    while (i < convertArr.length) {
      output.innerText += `${convertArr[i].result}`;
      i++;
    }
  } else {
    output.classList.add("invalid-input");
    if (input < 1 || input === 0) {
      output.innerText = `Please enter a number greater than or equal to 1.`;
      return;
    } else if (!input) {
      output.innerText = `Please enter a valid number.`;
    } else if (input > 3999) {
      output.innerText = `Please enter a number less than or equal to 3999.`;
      return;
    }
  }
};

const result = (numberVal) => {
  numberVal = parseInt(number.value);
  output.classList.remove("hidden");
  output.classList.remove("invalid-input");
  output.innerText = "";
  convertArr = [];
  inputConversion(numberVal);
};

converterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

convertBtn.addEventListener("click", result);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result();
  }
});
