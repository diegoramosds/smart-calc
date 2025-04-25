function button() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const el = e.target.textContent;
      console.log(el);
      showDisplay(el);
    }
  });
}
button();

function showDisplay(textValue) {
  let display = document.getElementById("#display");
  display = [];

  if (textValue) {
    display.push(textValue);
  }
  console.log(textValue);
}
showDisplay();

function convert() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("convert")) {
      console.log("Hello, world!");
    }
  });
}

convert();
