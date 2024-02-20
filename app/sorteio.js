const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}


