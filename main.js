let contenido=''
let pc2=''
let rock="piedra"
let paper="papel"
let scissors="tijera"
let cont=0
let gano=0
let perdio=0
let pc=["piedra","papel","tijera"]
let intentos = ''
let ganador=0
let ganopc=0


const enviar=document.getElementById('enviar')
enviar.addEventListener('click',trys)

const piedra=document.getElementById('piedra')
piedra.addEventListener('click',()=> {roca(),varios()})

const papel=document.getElementById('papel')
papel.addEventListener('click',()=> {papeles(),varios()})

const tijera=document.getElementById('tijera')
tijera.addEventListener('click',()=> {tijeras(),varios()})

const reset=document.getElementById('reseteo')
reset.addEventListener('click', ()=>{
    location.reload()
})

const acerca=document.getElementById('acerca')
acerca.addEventListener('click',acercade)

function trys() {
    const intento=document.getElementById('intentos')
    intentos=intento.value
    intento.value=''
    alert('Que empiece el juego')
    maquina()
    varios()
}

function maquina(){
    let random=Math.floor(Math.random()*pc.length)
    pc2=pc[random]
}

function roca(){
    if (pc2==rock){
        alert('Ganaste')
        ganador++
        gano++
    }else {
        alert('Perdiste')
        ganopc++
        perdio++
    }
    varios()
    cont++
    maquina()
}

function papeles(){
    if (pc2==paper){
        alert('Ganaste')
        ganador++
        gano++
    }else {
        alert('Perdiste')
        ganopc++
        perdio++
    }
    varios()
    cont++
    maquina()
}

function tijeras(){
    if (pc2==scissors){
        alert('Ganaste')
        ganador++
        gano++
    }else {
        alert('Perdiste')
        ganopc++
        perdio++
    }
    varios()
    cont++
    maquina()
}

function varios(){
    if (intentos==cont){
        piedra.disabled=true
        papel.disabled=true
        tijera.disabled=true
        final()
        alerta()
    }
}

function final(){
    contenido=''
    contenido+=`<table>`
    contenido+=`<tr><th colspan="2">Resultados de Victorias</th></tr>`
    contenido+=`<tr><td>Jugador</td>`
    contenido+=`<td>${ganador}</td></tr>`
    contenido+=`<tr><td>Maquina</td>`
    contenido+=`<td>${ganopc}</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla2').innerHTML=contenido 
}

function alerta(){
    if (ganador>ganopc){
        alert('Ganaste el partido')
    }else if (ganador==ganopc){
        alert('Empate de partido')
    }else{
        alert('Perdiste el partido')
    }
}

function acercade(){
    contenido=''
    contenido+='<br>'
    contenido+=`<h2>Proyecto creado por:</h2>`
    contenido+=`<h3>Sebastian Andres Vargas Paez<h3>`
    
    document.getElementById('pantalla2').innerHTML=contenido
}