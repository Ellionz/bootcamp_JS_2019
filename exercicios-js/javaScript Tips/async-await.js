const random = () => {
    return Promise.resolve(Math.random())
}

// Bad promise code
/*
const simRandomAsyncNums = () => {
    let first
    let second
    let third

    return random()
        .then(v => {
            first = v
            return random()
        })
        .then(v => {
            second = v;
            return random()
        })
        .then(v => {
            third = v
            return first + second + third
        })
}*/

// Good promise code
const simRandomAsyncNums = async() => {
    const first = await random()
    console.log(`first = ${first}`)
    const second = await random()
    console.log(`second = ${second}`)
    const third = await random()
    console.log(`third = ${third}`)

   console.log(`Result ${first + second + third}`)
}

simRandomAsyncNums()