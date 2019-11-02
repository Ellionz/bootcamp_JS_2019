// what is the output=

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()) // undefined
console.log(hero.getSecretIdentity()) // 'John Doe'