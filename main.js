let contenido=''
let pc2=''
let rock="piedra"
let paper="papel"
let scissors="tijera"
let cont=0
let gano=0
let perdio=0
let pc=["piedra","papel","tijera"]

const enviar=document.getElementById('enviar')
enviar.addEventListener('click',trys)

const piedra=document.getElementById('piedra')
piedra.addEventListener('click',roca,varios)

const papel=document.getElementById('papel')
papel.addEventListener('click', papeles,varios)

const tijera=document.getElementById('tijera')
tijera.addEventListener('click', tijeras,varios)


function trys() {
    const intento=document.getElementById('intentos')
    let intentos=intento.value
    intento.value=''
    console.log(intentos)
    contenido+=`<br>Que empiece el juego, Selecciona una opcion:`
    document.getElementById('pantalla').innerHTML=contenido
    maquina()
    varios()
}

function maquina(){
    let random=Math.floor(Math.random()*pc.length)
    pc2=pc[random]
    console.log(pc2)
    console.log(cont)
}

function roca(){
    if (pc2==rock){
        alert('Ganaste')
        gano++
    }else {
        alert('Perdiste')
        perdio++
    }
    cont++
    varios()
    maquina()
}

function papeles(){
    if (pc2==paper){
        alert('Ganaste')
        gano++
    }else {
        alert('Perdiste')
        perdio++
    }
    cont++
    varios()
    maquina()
}

function tijeras(){
    if (pc2==scissors){
        alert('Ganaste')
        gano++
    }else {
        alert('Perdiste')
        perdio++
    }
    cont++
    varios()
    maquina()
}

function varios(){
    if (intentos>=cont){
        piedra.disabled=true
        papel.disabled=true
        tijera.disabled=true
    }
}