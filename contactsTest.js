let myCont = require("./contacts")
let myPers = require("./person")

let personas = new myPers.Person(90,190,2003)
let contactos = new myCont.Contacts()

contactos.array.push(personas)
console.log(contactos.printPersons());