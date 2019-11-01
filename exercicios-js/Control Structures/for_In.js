const eval = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in eval) {
    console.log(i, eval[i])
}

const person = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    hight: 64
}

for(let atribute in person) {
    console.log(`${atribute} = ${person[atribute]}`)
}
