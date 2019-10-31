console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj['nome'] = 'Bola' - mesma coisa que a de cima

console.log(obj.nome)

function obj(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const obj2 = new obj('Cadeira',10)
const obj3 = new obj('Mesa',25)
console.log(obj2)
console.log(obj3.nome)
