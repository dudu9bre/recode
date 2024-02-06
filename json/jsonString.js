// conversão

/* let exemploJson ='{"nome": "Carlos", "telefone": "4002-8922"}'
let coversao = JSON.parse(exemploJson)

console.log(exemploJson) */

// conversão inversa

/* let objeto = {
    nome: 'Carlos',
    telefone: '4002-8922'
}
let conversao = JSON.stringify(objeto)

console.log(conversao) */

// exemplo

let eu = {
    nome: "Carlos",
    endereco: {
        bairro: "Leblon",
        estado: "Rio de Janeiro"
    },
    telefones: [
        {
            representante: "Carlos",
            telefone: "4002-8922"
        },
        {
            representante: "Vó",
            telefone: "0800-0800"
        }
    ],
    funcaoArrow: (x) => x * x,
    funcaoAnonima: function (x) {
        return x * x
    }
}

console.log(eu.nome)

console.log(eu.telefones[0])

console.log(eu.funcaoArrow(3))

console.log(eu.funcaoAnonima(4))

// bem fácil