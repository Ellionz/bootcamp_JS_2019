const arr = ['badger', 'beaver', 'babbon']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr[Symbol.iterator] = function() {
    let i = 0;
    let arr = this;
    return {
        next: function() {
            if (i >= arr.length) {
                return { done: true};
            } else {
                const value = arr[i] + ':)';
                i++;
                return {value, done: false}
            }
        }
    }
}

for (const e of arr) {
    console.log(e);
}

arr.forEach(v => console.log(v))

//-------------------------------
//Object loop

const equine = { horse: 'cavalo', zebra: 'zebra', unicorn: 'unicornio'}

for (const key in equine) {
    console.log(equine[key])
}

const equine1 = new Map(Object.entries({teste1 : '1', teste2: '2', teste3: '3'}))

for (const v of equine1.values()){
    console.log(v)
}