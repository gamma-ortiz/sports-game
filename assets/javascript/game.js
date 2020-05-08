const numreset = document.querySelector('#num-resets')
const resetbutton = document.querySelector('#reset-button')
const shootbuttonA = document.querySelector('#teamone-shoot-button')
const shootbuttonB = document.querySelector('#teamtwo-shoot-button')

const teamonegoals = document.querySelector('#teamone-numgoals')
const shotstakenA = document.querySelector('#teamone-numshots')
const teamtwogoals = document.querySelector('#teamtwo-numgoals')
const shotstakenB = document.querySelector('#teamtwo-numshots')

let shotone = 0
let shottwo = 0
let goalone = 0
let goaltwo = 0
let reset = 0

shootbuttonA.addEventListener('click', function () {
shotstakenA.innerHTML = shotone += 1
if (Math.random() <0.5){
teamonegoals.innerHTML = goalone += 1
}
})
shootbuttonB.addEventListener('click', function () {
shotstakenB.innerHTML = shottwo += 1
if (Math.random() <0.5) {
    teamtwogoals.innerHTML = goaltwo += 1

}
})
resetbutton.addEventListener('click', function () {
shotstakenA.innerHTML = shotone = 0
shotstakenB.innerHTML = shottwo = 0
numreset.innerHTML = reset += 1
teamonegoals.innerHTML = goalone = 0
teamtwogoals.innerHTML = goaltwo = 0
})
