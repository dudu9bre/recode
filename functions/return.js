function formatarMensagem(textoEntrada) {
    if (textoEntrada == undefined) {
        return "..."
    }
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    let msgFormatada = hora + ":" + min + ":" + sec + ": " + textoEntrada

    return msgFormatada
}

console.log(formatarMensagem("Um texto qualquer"))
console.log(formatarMensagem())
console.log(formatarMensagem("Outro texto qualquer"))