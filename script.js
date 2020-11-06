function abrir() {
  document.querySelector(".configuracoes").style.display = "block"
}
document.querySelector("botaozerar").addEventListener("click", zerar)
function zerar() {
  localStorage.removeItem("melhor")
}
