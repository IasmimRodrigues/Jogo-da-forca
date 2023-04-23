let letra = document.getElementById('letraDigitada');

const palavras = [
    "foguete",
    "arroz",
    "tesoura",
    "cozinheiro",
    "jardim",
    "mochila",
    "girassol",
    "bicicleta",
    "escola",
    "coelho",
    "cachorro",
    "gato",
];

let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;


criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra];
    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const palavraTela = document.getElementById("palavraSecreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida() {
    if(tentativas > 0) {
        comparaListas(letra.value);
        montarPalavraNaTela();
    }
    
}

function comparaListas() {
    const pos = palavraSecretaSorteada.indexOf(letra.value);
    if(pos < 0) {
        tentativas--;
        //apresentar na tela a img
        //verificar se tem tentativas
    } else {
        for(i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra.value) {
                listaDinamica[i] = letra.value;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if(vitoria == true) {
        tentativas = 0;
    }
}