let valor // não inicializada
console.log(valor)

valor = null // ausência de valor e não aponta para nenhum endereço de memória
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

const a = {nome:'ola'}
const b = a
b.nome = 5
console.log(b)
console.log(a)