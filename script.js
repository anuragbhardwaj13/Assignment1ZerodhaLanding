const capital = document.getElementById("capital");
const years = document.getElementById("years");
const interest = document.getElementById("interest");

const portfolioReturn =
  (Number(capital.value) * Number(interest.value) * Number(years.value)) / 100 +
  Number(capital.value);

document.getElementById("calculate").addEventListener("click", () => {
  console.log(portfolioReturn);
  document.getElementById("return").innerText =
    (Number(capital.value) * Number(interest.value) * Number(years.value)) /
      100 +
    Number(capital.value);
});
document.getElementById("reset").addEventListener("click", () => {
  capital.value = "";
  interest.value = "";
  years.value = "";
  document.getElementById("return").innerText = "";
});
