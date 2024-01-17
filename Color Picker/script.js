const colors = ["blue", "purple", "red", "orange", "#4AE2F0", "#F04AE2", "#9BF2EA", "#2A8C82", "#4AF089"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}