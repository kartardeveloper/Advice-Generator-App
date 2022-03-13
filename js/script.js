const diceButton = document.querySelector(".dice-wrapper");
const adviceMainText = document.querySelector("#advice__main-text");
const adviceNumber = document.querySelector("#advice-num");

diceButton.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => printData(data))
    .catch((err) => console.log(err));
});

function printData(data) {
  const adviceData = data.slip;
  adviceNumber.innerText = adviceData.id;
  adviceMainText.innerText = adviceData.advice;
}
