// contexto léxico 1
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// Objectos são grupos de pares nome/valor4
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

