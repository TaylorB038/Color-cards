//inicio do jogo
var corcard = ""
function loop() {
  //limpar certo e errado
  for (var i = 0; i < 3; i++) {
	  cards[i].classList.remove("certo")
	  cards[i].classList.remove("errado")
	}
  //colorir o cardcor
  var num = ""
  do {
    num = [Math.floor(Math.random() * cores.length)]
  } while (corcard == cores[num])
  corcard = cores[num]
  cardcor.style.backgroundColor = corcard
  
  //nomear card com reposta
  var num2 = Math.floor(Math.random() * cards.length)
  cards[num2].innerHTML = `<p>${corcard}</p>`
  cards[num2].id = corcard
  var cardout = cards.splice(num2, 1)[0]
  var corout = cores.splice(num, 1)[0]
  
  //nomear outras cards
  var num3 = Math.floor(Math.random() * cores.length)
  cards[0].innerHTML = `<p>${cores[num3]}</p>`
  cards[0].id = cores[num3]
  var corout2 = cores.splice(num3, 1)[0]
  
  var num4 = Math.floor(Math.random() * cores.length)
  cards[1].innerHTML = `<p>${cores[num4]}</p>`
  cards[1].id = cores[num4]
  
  //repor cores e organizar cards
  cards.push(cardout)
  cores.push(corout)
  cores.push(corout2)
  cards = [
    document.querySelector('.card1'),
    document.querySelector('.card2'),
    document.querySelector('.card3'),
    ]
}
function reload() {
  //remover fail
  var fail = document.querySelector(".fail")
  fail.style.display = "none"
  fail.style.animation = "failout 1s"
  //girar a seta
	var img = document.querySelector("img")
	function anm() {
	  var i = setInterval(frame, 1)
	  var g = 0
	  function frame() {
	    if (g == 315) {
	      clearInterval(1)
	    }else{
	      g += 5
	      img.style.transform = `rotate(${g}deg)`
	    }
	  }
	}
	//limpar certo e errado das cards
	for (var i = 0; i < 3; i++) {
	  cards[i].classList.remove("certo")
	  cards[i].classList.remove("errado")
	}
	//chamadas e clearpoint
	anm(); loop(); pontos = "0";
	document.querySelector(".pontos").innerText = pontos
}

var cores = [
  "green",
  "aqua",
  "aquamarine",
  "lime",
  "cyan",
  "cadetblue",
  "chartreuse",
  "darkcyan"]
var cardcor = document.querySelector(".cardcor")
var cards = [
    document.querySelector('.card1'),
    document.querySelector('.card2'),
    document.querySelector('.card3')]
var audios = [
  document.querySelector(".talitha"),
  document.querySelector(".spica")]
  audios[0].volume = 0.7; audios[1].volume = 0.5
var pontos = ""
var vidas = "2"

cards[0].addEventListener("click", click1)
cards[1].addEventListener("click", click2)
cards[2].addEventListener("click", click3)

function click1() {
  if (corcard == cards[0].id) {
    audios[0].play()
    cards[0].classList.add("certo")
    pass()
  }else {
    audios[1].play()
    cards[0].classList.add("errado")
    if (vidas == 0) {
      fail()
    }else {
      vidas--
    }
  }
}
function click2() {
  if (corcard == cards[1].id) {
    audios[0].play()
    cards[1].classList.add("certo");
    pass()
  }else {
    audios[1].play()
    cards[1].classList.add("errado")
    if (vidas == 0) {
      fail()
    }else {
      vidas--
    }
  }
}
function click3() {
  if (corcard == cards[2].id) {
    audios[0].play()
    cards[2].classList.add("certo")
    pass()
  }else {
    audios[1].play()
    cards[2].classList.add("errado")
    if (vidas == 0) {
      fail()
    }else {
      vidas--
    }
  }
}

function pass() {
  var i = setInterval(frame, .5)
  var c = 0
  function frame() {
    if (c == 100) {
      clearInterval(i)
      loop()
    } else {
      c++
    }
  }
  pontos++
  document.querySelector(".pontosF").innerText = pontos
  document.querySelector(".pontos").innerText = pontos
}

function fail() {
  var fail = document.querySelector(".fail")
  fail.style.display = "block"
  fail.style.animation = "failin 1s"
  document.querySelector(".pontos").innerText = "0"
  var topleft = document.querySelector(".topleft")
  var topright = document.querySelector(".topright")
  fail.appendChild(topleft)
  fail.appendChild(topright)
}