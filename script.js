function abrir() {
  document.querySelector(".conteinerC").style.display = "block"
}
document.querySelector(".botaozerar").addEventListener("click", zerar)
function zerar() {
  localStorage.removeItem("melhor")
}
