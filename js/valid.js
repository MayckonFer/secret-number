function checksIfTheGuessHasAValidValue(kick) {
  const number = +kick;

  if (kickInvalid(number)) {
    elementKick.innerHTML += `<div>Valor Inválido</div>`;
    return;
  }

  if (numberIsGreaterOrLessThanTheAllowedValue(number)) {
    elementKick.innerHTML += `<div>valor inválido: Fale um número entre ${smallerValue} e ${largerValue}</div>`;
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <div class="message-sucess">
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}!</h3>
        <h4>Recarregue a página para jogar novamente!</h4>
        <img id="img-sucess" src="../images/confetti-40.webp" alt="acertou" />
        <button id="playAgain">Jogar novamente</button>
      </div>
    `;
  } else if (number > secretNumber) {
    elementKick.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `;
  } else {
    elementKick.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
  }
}

function kickInvalid(number) {
  return Number.isNaN(number);
}

function numberIsGreaterOrLessThanTheAllowedValue(number) {
  return number > largerValue || number < smallerValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "playAgain") window.location.reload();
});
