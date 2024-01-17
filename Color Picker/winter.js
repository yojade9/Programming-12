const winter = ["0", "1", "2", "3", "4", "5"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let winterColor = "#";
  for (let i = 0; i < 4; i++) {
    winterColor += winter[getRandomNumber()];
  }

  color.textContent = winterColor;
  document.body.style.backgroundColor = winterColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * winter.length);
}