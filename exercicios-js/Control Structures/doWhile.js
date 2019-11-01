function getRandomIntBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let opcao = -1
let rep = 0

do {
    opcao = getRandomIntBetween(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
    ++rep
} while (opcao != -1) 

console.log(`Nº de rep: ${rep} Até a próxima`)