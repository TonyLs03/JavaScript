//alert("testando conexão com page html");

//encontrar altura e largura do window
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  //1500
  criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  //1000
  criaMosquitoTempo = 1000;
} else if (nivel === "chucknorris") {
  //750
  criaMosquitoTempo = 750;
}

function ajustaSizeWindGame() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

ajustaSizeWindGame();

var cronometro = setInterval(function () {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  //removendo mosquito anterior (caso exista)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    //console.log("elemento selecionado foi: v" + vidas);
    if (vidas > 3) {
      //alert("interromper o jogo (game over)");
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";

      vidas++;
    }
  }

  var positionX = Math.floor(Math.random() * largura) - 90;
  var positionY = Math.floor(Math.random() * altura) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  //criar o elemento html
  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = sizeRandom() + " " + ladoRandom();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function sizeRandom() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito-1";
    case 1:
      return "mosquito-2";
    case 2:
      return "mosquito-3";
  }
}

function ladoRandom() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "lado-A";
    case 1:
      return "lado-B";
  }
}
