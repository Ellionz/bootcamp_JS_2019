// How add data in array, end and begin 
var myArray = ['a', 'b', 'c', 'd']

myArray.push('end')
myArray.unshift('start')

myArray = [...myArray, 'end']
myArray = ['start', ...myArray]
myArray = ['start', ...myArray, 'end']

console.log(myArray)