
const tai = document.querySelector(".dark-mode input")
const menu = document.querySelector("body")
const menu2 = document.querySelector(".sec-1")
const menu4 = document.querySelector(".sec-2")
const menu5 = document.querySelector(".sec-3")
const menu3 = document.querySelector("footer")
const hambur = document.querySelector(".nav-ul")
const hamtoggle = document.querySelector(".hamburger-toggle")

tai.addEventListener('click' ,function(){
    menu.classList.toggle('dark-all')
    menu2.classList.toggle('dark-alls')
    menu3.classList.toggle('dark-all1')
    menu4.classList.toggle('dark-alls')
    menu5.classList.toggle('dark-alls')
})
hamtoggle.addEventListener('click', function(){
    hambur.classList.toggle('.hamburger')
})