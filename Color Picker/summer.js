const summer = ["3", "6", "9", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let summerColor = "#";
  for (let i = 0; i < 3; i++) {
    summerColor += summer[getRandomNumber()];
  }

  color.textContent = summerColor;
  document.body.style.backgroundColor = summerColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * summer.length);
}