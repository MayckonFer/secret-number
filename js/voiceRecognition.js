window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementKick = document.querySelector("#kick");

recognition.lang = "pt-br";

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  kick = event.results[0][0].transcript;

  displayKickOnScreen(kick);
  checksIfTheGuessHasAValidValue(kick);
}

function displayKickOnScreen(kick) {
  elementKick.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${kick}</span>
  `;
}

recognition.addEventListener("end", () => {
  recognition.start();
});
