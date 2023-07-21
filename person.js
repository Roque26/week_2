export class Person{
    constructor(peso, altura,yearOfBirth){
       this.peso = peso
       this.altura = altura
       this.yearOfBirth =yearOfBirth
       this.hobbies = ["leer,comer,bailar"]
    }
    imc(){
      let imc = Math.floor((this.altura^2) / this.peso)
      return imc
    }
    caledad(){
     return 2023 - this.yearOfBirth }

    
    
      printAll(){
        return  this.altura + "-" + this.peso + "-" + this.yearOfBirth
    }  
    printHobbies(){
    return this.hobbies
    }   
}



/////////////////////////////////////////////////////////////////////////////////////



