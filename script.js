function abrir() {
  var T404 = document.querySelector(".T404")
  var fechar = document.querySelector(".fechar")
  var cont = document.querySelector(".conteinerConfig")
  
  //mostrar conteiner de configuraçoes
  T404.style.display = "block"
  cont.style.display = "block"
  
  //funçao do botão de limpar dados
  document.querySelector(".limpardados").addEventListener("click", zerar)
  function zerar() {
    localStorage.removeItem("melhor")
  }
  fechar.addEventListener("click", close)
  
  //função de fechar
  function close() {
    T404.style.display = "none"
    cont.style.display = "none"
  }
}

function play() {
  var tela = document.querySelector(".tela")
  var cores = document.querySelector(".selectcor")
  tela.style.display = "none"
  cores.style.display = "flex"
  
  var topleft = document.querySelector(".topleft")
  topleft.style.zIndex = 4
  document.querySelector(".topleft, img").setAttribute("src", "media/fechar.svg")
  
  topleft.addEventListener("click", function() {
    cores.style.display = "none"
    tela.style.display = "flex"
  })
}

function mudo() {
  sessionStorage(som, "desl")
}

var pontos = localStorage.getItem("melhor")
//document.querySelector(".melhor").innerHTML += `<p>${pontos}</p>`;