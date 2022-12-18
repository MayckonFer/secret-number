const elementSmallerValue = document.querySelector("#smaller-value");
const elementLargerValue = document.querySelector("#larger-value");
const smallerValue = 1;
const largerValue = 1000;

elementSmallerValue.innerHTML = smallerValue;
elementLargerValue.innerHTML = largerValue;

const secretNumber = generateNumberRandom();

console.log(secretNumber);

function generateNumberRandom() {
  return parseInt(Math.random() * largerValue + 1);
}
