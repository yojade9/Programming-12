const spring = ["8", "9", "A", "B", "C", "D"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let springColor = "#";
  for (let i = 0; i < 3; i++) {
    springColor += spring[getRandomNumber()];
  }

  color.textContent = springColor;
  document.body.style.backgroundColor = springColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * spring.length);
}