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
let tentativas = 7;
let letrasErradas = [];
let letrasDigitadas = [];

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra];
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
    mostrarAvisoLetraRepetida();
  }
}

function comparaListas() {
  const pos = palavraSecretaSorteada.indexOf(letra.value);
  
  if (pos < 0) {
    let valueLetra = letrasDigitadas.includes(letra.value);
    if(valueLetra == 0) {
      tentativas--;
    }
    
    mostrarLetrasErradas();
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
    window.location = "./venceu.html";
    tentativas = 0;
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 6:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img2.svg)";
      break;
    case 5:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img3.svg)";
      break;
    case 4:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img4.svg)";
      break;
    case 3:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img5.svg)";
      break;
    case 2:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img6.svg)";
      break;
      case 1:
      document.getElementById("img").style.backgroundImage =
        "url(./imagens/img7.svg)";
      break;
    case 0:
      window.location = "./perdeu.html"
      break;
  }
}

function mostrarLetrasErradas() {
  const letrasErradas = document.getElementById("viewLetrasErradas");
  let valueLetra = letrasDigitadas.includes(letra.value);
  
  if(valueLetra == 0) {
    letrasErradas.innerHTML += "<h3 class='letraErrada'>" + letra.value + "</h3>";
    letrasDigitadas.unshift(letra.value);
  }
}

function mostrarAvisoLetraRepetida() {
  if(letrasErradas.includes(letra.value) == true) {
    alert("Você já digitou essa letra!")
  }
  letrasErradas.unshift(letra.value);
}
