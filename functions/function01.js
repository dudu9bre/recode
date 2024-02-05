function queHoras() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    let horaFormatada = hora + ":" + min + ":" + sec

    console.log(`Agora são exatas ${horaFormatada}`)
}

queHoras()