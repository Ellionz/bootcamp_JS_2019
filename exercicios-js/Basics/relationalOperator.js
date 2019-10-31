// o resultado de um operador relacional vai ser sempre true ou false

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 0 é a data de referencia que é +/- 01/01/1970
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // está a comparar um número, e como é um numero igual são estritamente iguais tanto em tipagem como em valor
console.log('12)', undefined == null)
console.log('12)', undefined === null)

// == igualdade, compara a igualdade do valor mas ignora os tipos das variaveis
// === estritamente igual, compara o valor e o tipo da variavel