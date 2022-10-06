const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoDeMenorValor = document.getElementById('menor-valor');
elementoDeMenorValor.innerHTML = menorValor;

const elementoDeMaiorValor = document.getElementById('maior-valor');
elementoDeMaiorValor.innerHTML = maiorValor;



