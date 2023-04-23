let letra = document.getElementById("letraDigitada");

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

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida() {
  if (tentativas > 0) {
    comparaListas(letra.value);
    montarPalavraNaTela();
  }
}

function comparaListas() {
  const pos = palavraSecretaSorteada.indexOf(letra.value);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();
    //verificar se tem tentativas
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra.value) {
        listaDinamica[i] = letra.value;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    tentativas = 0;
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("img").style.backgroundImage = "url(./imagens/img2.svg)";
      break;
    case 4:
      document.getElementById("img").style.backgroundImage = "url(./imagens/img3.svg)";
      break;
    case 3:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img4.svg)";
      break;
    case 2:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img5.svg)";
      break;
    case 1:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img6.svg)";
      break;
    default:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img1.svg)";
      break;
  }
}
