function abrir() {
  //mostrar conteiner de configuraçoes
  var T404 = document.querySelector(".T404")
  T404.style.display = "flex"
  document.querySelector("#conteinerC").style.display = "block"
  
  //funçao do botão de reza zerar
  document.querySelector("#botaozerar").addEventListener("click", zerar)
  function zerar() {
    localStorage.removeItem("melhor")
  }
  
  //função do nosso de fechar
  document.querySelector(".fechar").addEventListener("click", fechar)
  function fechar() {
    T404.style.display = "none"
  }
}

function play() {
  var tela = document.querySelector(".tela")
  var cores = document.querySelector(".telacores")
  tela.style.display = "none"
  cores.style.display = "flex"
  
  var topleft = document.querySelector(".topleft")
  topleft.style.zIndex = 4
  topleft.addEventListener("click", function() {
    cores.style.display = "none"
    tela.style.display = "flex"
  })
}