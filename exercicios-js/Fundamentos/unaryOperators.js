let num1 = 1
let num2 = 2

num1++ // num1 = num1 + 1
console.log(num1)

--num1 // num1 = num1 - 1 -> forma préfixada é a mais rápida
console.log(num1)

// = true porque como é utilizado um prefixo ele executa antes da compração 
console.log(++num1 === num2--) 

// = false porque como não é utilizado um prefixo ele executa depois da compração 
console.log(num1++ === num2--) 