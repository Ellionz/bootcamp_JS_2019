// apropiada para situações que tem um numero indetermidado de repetições
function getRandomIntBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let opcao = 0

while (opcao != -1) {
    opcao = getRandomIntBetween(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')