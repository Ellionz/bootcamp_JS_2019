const funcs = []

for (var i = 0; i < 10; i++) { // var não tem scope de bloco
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//----- com let

const funcs1 = []

for (let i = 0; i < 10; i++) { // let tem scope de bloco
    funcs1.push(function(){
        console.log(i)
    })
}

funcs1[2]()
funcs1[8]()