let frutas = [ // array || vetor
    "Maça"
    , "Banana"
    , "Uva"
]
console.log(frutas)

console.log(frutas[0])

frutas[3] = "Melancia" // Adiciona uma nova fruta

console.log(frutas)

frutas.push( // adiciona as frutas no final
    "Abacaxi"
    , "Morango"
    , "Laranja"
)

console.log(frutas)

frutas.pop() // remove a última fruta // laranja

console.log(frutas)

frutas.splice(1, 1) // primeiro parâmetro: posição da fruta q qremos remover; segundo parâmetro: quantidade de elementos

// nesse caso irá remover a banana

// o splice remove a partir da posição inicial até a quantidade de elementos, exemplo: se eu botar frutas.slice(2, 3), irá remover 3 frutas a partir da 2

console.log(frutas)

frutas.shift() // remove a primeira fruta

// no caso, maçã

console.log(frutas)

console.log(frutas.length) // vai mostrar qnts frutas tem dentro do vetor

// no caso, 4

frutas.sort() // irá sorter as frutas em ordem alfábetica, se fossem números, do menor ao maior

console.log(frutas)