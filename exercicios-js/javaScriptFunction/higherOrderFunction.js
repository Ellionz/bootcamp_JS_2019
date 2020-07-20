// Criar de fomra literar
function fun1() { }

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1 , fun2]
console.log(array[0](2, 3))

// Armazenar em num atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// Apenas executa se tiver os param todos já definidos
soma(2, 3)(4) 
// ou então guardamos numa const e voltamos a executar como função enviando o outro param
const soma1 = soma(2, 3)
soma1(5)




