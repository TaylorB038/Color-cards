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
  cards[num2].innerHTML = `<p>${coresT[num]}</p>`
  cards[num2].id = corcard
  var cardout = cards.splice(num2, 1)[0]
  var corout = cores.splice(num, 1)[0]
  var corTout = coresT.splice(num, 1)[0]
  
  //nomear outras cards
  var num3 = Math.floor(Math.random() * cores.length)
  cards[0].innerHTML = `<p>${coresT[num3]}</p>`
  cards[0].id = cores[num3]
  var corout2 = cores.splice(num3, 1)[0]
  var corTout2 = coresT.splice(num3, 1)[0]
  
  var num4 = Math.floor(Math.random() * cores.length)
  cards[1].innerHTML = `<p>${coresT[num4]}</p>`
  cards[1].id = cores[num4]
  
  //repor cores e organizar cards
  cards.push(cardout)
  cores.push(corout)
  cores.push(corout2)
  coresT.push(corTout)
  coresT.push(corTout2)
  cards = [
    document.querySelector('.card1'),
    document.querySelector('.card2'),
    document.querySelector('.card3'),
    ]
  
  ////insetvida(vidas)
}
function reload() {
  //devolver top e vidas
  var top = [document.querySelector(".topleft"),document.querySelector(".topright")]
  document.querySelector("header").appendChild(top[0])
  document.querySelector("header").appendChild(top[1]); top[1].style.marginLeft = "68vw"
  vidas = 2
  
  //remover fail
  var T404 = document.querySelector(".T404")
  T404.style.display = "none"

  //girar a seta
	var reload = document.querySelector(".reload")
	function anm() {
	  var i = setInterval(frame, 1)
	  var g = 0
	  function frame() {
	    if (g == 315) {
	      clearInterval(1)
	    }else{
	      g += 5
	      reload.style.transform = `rotate(${g}deg)`
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
/*function insetvida(v) {
  var p = document.querySelector(".cardcor p")
  if (v == 2) {
    p.innerHTML = "&hearts; &hearts; <br> &hearts;"
  }else if (v == 1) {
    p.innerHTML = "&hearts; &hearts;"
  }else if (v == 0) {
    p.innerHTML = "&hearts;"
  }else {
    p.innerHTML = ""
  }
}*/

var cores = [
  "Green",
  "Aqua",
  "AquaMarine",
  "Cyan",
  "CadetBlue",
  "Chartreuse",
  "DarkCyan",
  "DarkGreen",
  "DarkKhaki",
  "DarkOliveGreen",
  "DarkSeaGreen",
  "DarkSlateGray",
  "DarkTurquoise",
  "ForestGreen",
  "GreenYellow",
  "LawnGreen",
  "lightGreen",
  "LightSeaGreen",
  "Lime",
  "LimeGreen",
  "MediumSpringGreen",
  "MediumTurquoise",
  "Olive",
  "OliveDrab",
  "PaleGreen",
  "SeaGreen",
  "SpringGreen",
  "Teal",
  "Turquoise",
  "YellowGreen"
  ]
var coresT = [
  "Green",
  "Aqua",
  "AquaMarine",
  "Cyan",
  "CadetBlue",
  "Chartreuse",
  "DarkCyan",
  "DarkGreen",
  "DarkKhaki",
  "Dark<wbr/>OliveGreen",
  "Dark<wbr/>SeaGreen",
  "Dark<wbr/>SlateGray",
  "Dark<wbr/>Turquoise",
  "ForestGreen",
  "GreenYellow",
  "LawnGreen",
  "lightGreen",
  "Light<wbr/>SeaGreen",
  "Lime",
  "LimeGreen",
  "Medium<wbr/>SpringGreen",
  "Medium<wbr/>Turquoise",
  "Olive",
  "OliveDrab",
  "PaleGreen",
  "SeaGreen",
  "Spring<wbr/>Green",
  "Teal",
  "Turquoise",
  "Yellow<wbr/>Green"
  ]
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
      //insetvida(vidas)
      fail()
    }else {
      vidas--
      //insetvida(vidas)
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
      //insetvida(vidas)
      fail()
    }else {
      vidas--
      //insetvida(vidas)
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
      //insetvida(vidas)
      fail()
    }else {
      vidas--
      //insetvida(vidas)
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
  //mostrar fail
  var T404 = document.querySelector(".T404")
  T404.style.display = "block"
  T404.style.animation = "failin 1s"
  T404.style.background = "#00000070"
  document.querySelector(".pontos").innerText = "0"
  //mostrar controles
  var contr =document.querySelector(".controles")
  var top = [document.querySelector(".topleft"),document.querySelector(".topright")]
  top[1].style.marginLeft = "4vw"
  contr.appendChild(top[0])
  contr.appendChild(top[1])
}