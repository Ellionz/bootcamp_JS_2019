{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) 

// uma var tens dois scopes possiveis 
teste = () => {
    var local = 1234
    console.log(local)
}

teste() 
//console.log(local)

//----------------------------
var numero = 1

{
    var numero = 2
    console.log('dentro =', numero )
}

console.log('fora =', numero)