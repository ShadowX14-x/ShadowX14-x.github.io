const messages = [
    "¿Estas Segura 😥​?",
    "Muy Segura 🥹​?",
    "Di que si amor 😭​",
    "Mi amor piensalo porfavor...",
    "Porfis di que si amor 🥺​",
    "Si dices que no, me pondre muy triste 😭​",
    "Muy pero muy triste amor...",
    "Tan triste que morire de tristeza 💀​😭​",
    "Esta bien tu ganas, dejare de insistir 😭​",
    "BROMAAAAA, DI QUE SI AMOR❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}