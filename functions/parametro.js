function logComHora(textoEntrada) {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    let horaFormatada = hora + ":" + min + ":" + sec

    console.log(horaFormatada, ":", textoEntrada)
}

logComHora("Um texto qualquer") // isso é chamada de função
logComHora("Outro texto qualquer") // isso tbm