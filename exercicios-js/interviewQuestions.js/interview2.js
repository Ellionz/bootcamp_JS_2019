// How do you create a private variable in JavaScript?

function secretVariable() {
    var private = 'super secret code';
    return function (){
        return private
    }
}

var getSecretVariable = secretVariable()

console.log(getSecretVariable())