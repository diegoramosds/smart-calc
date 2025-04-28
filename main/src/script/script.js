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
      let radio = document.getElementsByName("radio");
      let radio_values;
      let displayValueConvert = document.getElementById("display").defaultValue;
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          radio_values = radio[i].value;
        }
      }
      if (!displayValueConvert) {
        document.getElementById("display").defaultValue = "Insira um valor";
        return;
      } else if (radio_values === "dol") {
        fetch(
          `https://v6.exchangerate-api.com/v6/5c1f1304281e25c1eb546983/latest/USD`
        )
          .then((res) => res.json())
          .then((data) => {
            let rate = data.conversion_rates.BRL;
            let count = parseFloat(displayValueConvert) * rate;
            document.getElementById("display").defaultValue =
              "R$" + count.toFixed(2);
          });
      } else if (radio_values === "euro") {
        fetch(
          `https://v6.exchangerate-api.com/v6/5c1f1304281e25c1eb546983/latest/EUR`
        )
          .then((res) => res.json())
          .then((data) => {
            let rate = data.conversion_rates.BRL;
            let count = parseFloat(displayValueConvert) * rate;
            document.getElementById("display").defaultValue =
              "R$" + count.toFixed(2);
          });
      }
    }
  });
}
convert();
