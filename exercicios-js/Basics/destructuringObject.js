// novo recurso do ES2015

const pessoa = {
    nome: undefined,
    idade: 5,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000
    }
}

const {nome = 'Ana', idade} = pessoa // retira da estrutura pessoa o nome e a idade
// nome = 'Ana', valor default no caso do atributo estar undefined, ou não inicializado

console.log(nome, idade)

const { nome: n = 'Ana', idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {rua, numero, cep } } = pessoa
console.log(rua, numero, cep)



