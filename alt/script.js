function abrir() {
  document.querySelector(".T404").style.display = "flex"
  document.querySelector("#conteinerC").style.display = "block"

  document.querySelector("#botaozerar").addEventListener("click", zerar)
  function zerar() {
    localStorage.removeItem("melhor")
  }
}
