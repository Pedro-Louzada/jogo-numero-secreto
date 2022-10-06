const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //suporte do chrome para a aplicação, config

const recognition = new SpeechRecognition(); //instância pra conseguir utilizar o reconhecimento de voz
recognition.lang = 'pt-Br'; //configurando a lang para Português, config nossa instância 
recognition.start(); // startando

recognition.addEventListener("result", onSpeak) // result é o resultado do evento captado

function onSpeak(evento){
    chute = evento.results[0][0].transcript;
    exibeChute(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    ` 
}

recognition.addEventListener('end', () => recognition.start())