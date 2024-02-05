/* function formatarMensagem(textoEntrada) {
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

let fm = formatarMensagem

console.log(fm("Um texto qualquer"))
console.log(fm())
console.log(fm("Outro texto qualquer"))  */

// podemos tbm atribuir uma função à uma váriavel

let formatarMensagem = function(textoEntrada) {
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