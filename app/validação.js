function verificaSeOChutePossuiUmValorValido(chute){
    const numero = parseInt(chute); // transformou a fala para número inteiro

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido, informe valores inteiros!</div>'
        return //para que não execute mais nada dessa função
    }

    if (numeroForaIntervaloPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido, informe valores entre ${menorValor} e ${maiorValor}<div/>`
        return //para que não execute mais nada dessa função
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2>Parabéns, você acertou!</h2> 
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="refrash" class="btn-jogarNovamente">Jogar novamente</button>
        ` //document.body vai redesenhar meu body
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-from-line"></i></div>
        ` 
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-from-line"></i></div>
        ` 
    }

    
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero); //Number.isNaN vai me confirmar se o número realmente é um número ou é uma string
}

function numeroForaIntervaloPermitido(numero){
    return numero > maiorValor || numero < menorValor;  
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'refrash'){
        window.location.reload(); // reload da page
    }
})

