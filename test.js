var inputName = document.querySelector('#inputName');
var inputEmail = document.querySelector('#inputEmail');
var inputAge = document.querySelector('#inputAge');
var greet = document.querySelector('.greeting');
var inputForm = document.querySelector('form');
var Person = /** @class */ (function () {
    function Person(n, e, g) {
        this.name = n;
        this.email = e;
        this.age = g;
    }
    Person.prototype.greeting = function () {
        return "Hello " + this.name + " confirm if your email is " + this.email + " and your age is " + this.age;
    };
    return Person;
}());
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person1 = new Person(inputName.value, inputEmail.value, inputAge.valueAsNumber);
    greet.textContent = person1.greeting();
    inputForm.reset();
});
