var config = document.querySelector(".config")

config.addEventListener("click", abrir)

function abrir() {
  document.querySelector(".configuracoes").style.display = "block"
  document.querySelector("button").addEventListener("click", zerar)
  function zerar() {
    localStorage.remove("melhor")
  }
}
