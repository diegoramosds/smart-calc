function button() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const el = e.target.textContent;
      showDisplay(el);
    }
  });
}
button();

let displayValues = [];
let displayValue = document.getElementById("display").defaultValue;

function showDisplay(textValue) {
  if (textValue === "C") {
    displayValues = [];
  } else if (textValue === "←") {
    displayValues.pop();
  } else if (textValue === "=") {
    count();
  } else if (textValue && textValue !== "Coversão de moeda") {
    displayValues.push(textValue);
  }

  document.getElementById("display").defaultValue = displayValues.join("");
}

function count() {
  const result = eval(displayValues.join(""));
  displayValues = [result];
}

function convert() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("convert")) {
      console.log("Convert button clicked");
    }
  });
}
convert();
