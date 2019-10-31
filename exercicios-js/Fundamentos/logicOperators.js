/*
v e v -> v 
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v 
*/

function compras(trab1, trab2) {
    const comprarGelado = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2 // a diferença tambem simula um ou exclusivo
    const manterSaudavel = !comprarGelado // operador unário

    return {comprarGelado, comprarTv50, comprarTv32, manterSaudavel} // ES2015 recurso novo, tem construção inteligente de objecto através desta definição.
    // o objecto mantem na mesma o formato de key : value
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
