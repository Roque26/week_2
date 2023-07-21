import { Person } from "./person";



let imcC = new Person(80,180)
console.log(imcC.imc());

let persona = new Person(80,180,1995)
console.log("la edad es: "+ persona.caledad());

let A = new Person(80,180,1995)

console.log(A.printAll());

let  B= new Person()
console.log(A.printHobbies());