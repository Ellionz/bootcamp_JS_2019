Number.prototype.between = function (begin, end) {
    return this >= begin && this <= end
}

const printResult = function (eval) {
    if (eval.between(9, 10)) {
        console.log('Quadro de Honra')
    } else if (eval.between(7, 8.99)) {
        console.log('Aprovado')
    } else if (eval.between(4, 6.99)) {
        console.log('Recuperação')
    } else if (eval.between(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)