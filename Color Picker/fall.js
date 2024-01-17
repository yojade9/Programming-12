const fall = ["B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let fallColor = "#";
  for (let i = 0; i < 4; i++) {
    fallColor += fall[getRandomNumber()];
  }

  color.textContent = fallColor;
  document.body.style.backgroundColor = fallColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * fall.length);
}