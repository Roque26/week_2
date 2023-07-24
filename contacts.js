let myPer = require("./person")

class Contacts{
    constructor(){
    this.array = []
    }
    printPersons(){
        return this.array
    }
}
let contactos = new Contacts()
let persona8= new myPer.Person(90,175,1995)
contactos.array.push(persona8)
console.log(contactos.printPersons());
module.exports = {Contacts}