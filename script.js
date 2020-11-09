function abrir() {
  var T404 = document.querySelector(".T404")
  T404.style.display = "flex"
  document.querySelector("#conteinerC").style.display = "block"

  document.querySelector("#botaozerar").addEventListener("click", zerar)
  function zerar() {
    localStorage.removeItem("melhor")
  }
  
  document.querySelector(".fechar").addEventListener("click", fechar)
  function fechar() {
    T404.style.display = "none"
  }
}