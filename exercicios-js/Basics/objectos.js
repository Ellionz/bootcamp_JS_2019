// json (formato textual) - javaScripObjectNotation

const prod1 = {} // grupo de pares chave : valor
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço


console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        prop1: 1,
        obj1: {
            prop2: 2
        }
    }
}

console.log(prod2)

// JSON é diferente de objecto. 
// JSON é um formato textual 
// Objecto é uma coleção de chaves-valores
// Conseguimos criar um JSON a partir de um objecto

'{"nome" : "Camisa Polo", "preco" : "79.90"}'
