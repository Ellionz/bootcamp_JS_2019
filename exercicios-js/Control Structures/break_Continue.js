const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x== 5) {
        break 
        // age no bloco mais proximo do tipo for, while ou switch
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('-------')

for (y in nums) {
    if (y == 5) {
        continue 
        // age no laço mais proximo do tipo for ou while, interrompendo a repetição atual
    } 
    console.log(`${y} = ${nums[y]}`)
}

// Estas palavras reservadas causam desvio de fluxo, mediante o descrito em cada uma dos ex


// Rotulo - neste caso serve para refenciar o 1ro for para quando for feito o break afetar o primeiro em vez do segundo
// Evitar rotulos e a ser usado, com muitas precauções
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}