var config = document.querySelector(".config")

config.addEventListener("click", configuracoes)

function configuracoes() {
  document.querySelector(".configuracoes").style.display = "block"
  document.querySelector("button").addEventListener("click", zerar)
  function zerar() {
    localStorage.remove("melhor")
  }
}
