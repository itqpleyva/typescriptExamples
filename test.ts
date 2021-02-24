const inputName = document.querySelector('#inputName') as HTMLInputElement
const inputEmail = document.querySelector('#inputEmail') as HTMLInputElement
const inputAge = document.querySelector('#inputAge') as HTMLInputElement
const greet = document.querySelector('.greeting') as HTMLDivElement
const inputForm = document.querySelector('form')

interface personInterface{

    name:string
    email:string
    age:number
}

class Person implements personInterface{

    name:string
    email:string
    age:number

    constructor(n:string, e:string, g:number){

        this.name = n;
        this.email = e;
        this.age = g
    }

    greeting():string{

        return "Hello "+this.name+" confirm if your email is "+this.email+" and your age is "+this.age
    }
}

inputForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const person1 = new Person(inputName.value, inputEmail.value, inputAge.valueAsNumber);

    greet.textContent= person1.greeting();

    inputForm.reset();

})