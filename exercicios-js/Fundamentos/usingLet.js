var numero = 1
{
    let numero = 2 // let é aplicado no bloco, a execução deste código permite ter 2 numeros diferentes de 'numero', isto porque o let dá prioridade ao scope.
    console.log('dentro: ', numero)
}

console.log('fora: ', numero)