function abrir() {
  var T404 = document.querySelector(".T404")
  var fechar = document.querySelector(".fechar")
  var cont = document.querySelector(".conteinerConfig")
  
  //mostrar conteiner de configuraçoes
  T404.style.display = "block"
  cont.style.display = "block"
  
  //funçao do botão de limpar dados
  document.querySelector(".limpardados").addEventListener("click", zerar)
  
  fechar.addEventListener("click", close)
  //função de fechar
  function close() {
    T404.style.display = "none"
    cont.style.display = "none"
  }
}
function zerar() {
    localStorage.removeItem("melhor")
    document.querySelector("#pontos").innerHTML = "0"
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
  document.querySelector(".verde").addEventListener("click", irverde)
}

function mudo() {
  if(sessionStorage.getItem("som") == "desl") {
    sessionStorage.setItem("som", "lig")
    document.querySelector(".mute img").removeAttribute("src")
    document.querySelector(".mute img").setAttribute("src", "media/sound_on.svg")
  }else{
    sessionStorage.setItem("som", "desl")
    document.querySelector(".mute img").removeAttribute("src")
    document.querySelector(".mute img").setAttribute("src", "media/sound_off.svg")
  }
  
}

var pontos = localStorage.getItem("melhor")
document.querySelector("#pontos").innerHTML = pontos

function irverde() {
  window.location.assign("https://htmelpreview.github.io/?https://github.io/TaylorB038/Color-cards/blob/main/verde/verde.html")
}
