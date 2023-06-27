const rainBtn = document.querySelector('.rain')
const snowBtn = document.querySelector('.snow')
const heartBtn = document.querySelector('.heart')
const ballonBtn = document.querySelector('.ballon')
const body = document.querySelector('body')
const flat = document.querySelector('.flat')
heartBtn.addEventListener('click',()=>{
   generateEmj('heart','heartDiv','❤️','white')
})

rainBtn.addEventListener('click',()=>{
 generateEmj('rain','rainDiv','💧','rgb(70, 92, 96)')
 flat.style.background = 'rgb(76, 188, 237)'
})

snowBtn.addEventListener('click',()=>{
  generateEmj('snow','snowDiv','⁕','black')
})

ballonBtn.addEventListener('click',()=>{
  generateEmj('ballon','ballonDiv','🎈','white')
})


function generateEmj(name,emjClass,emj,backgroundColor) {
  body.style.background = backgroundColor
  setInterval(() => {
    let name = document.createElement("div")
    name.className = emjClass
    name.innerText = emj
    name.style.left = Math.random() * 100 + "vw"
    name.style.fontSize = Math.random() * 30 + 'px'
    body.append(name)

    setTimeout(() => {
      name.remove()
    }, 5000)
  }, 100)
}