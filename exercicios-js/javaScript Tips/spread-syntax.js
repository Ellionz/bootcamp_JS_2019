const pikachu = { name: 'Pikachu'}
const stats = { hp: 40, attack: 60, defense: 45}

// Bad object code
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// or

const lvl00 = Object.assign(pikachu, stats)
const lvl10 = Object.assign(pikachu, {hp: 45})


// Good object code

const lvl01 = { ...pikachu, ...stats}
const lvl11 = { ...pikachu, hp: 45}

console.log(lvl01)
console.log(lvl11)

// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

// Bad array code
/*
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')*/

// Good array code
// push
pokemon = [ ...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// unshift()
pokemon = [ 'Bulbasaur', 'Metapod', 'Weedle', ...pokemon]

console.log(pokemon)