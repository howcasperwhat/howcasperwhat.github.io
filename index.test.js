class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类的构造函数
    console.log(
      super.__proto__ === this.__proto__,
      super.__proto__ === Dog.prototype,
      Dog.prototype.__proto__ === Animal.prototype,
    )
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
const animal = new Animal('foo')
const person = new Person('tom')
dog.speak(); // 输出: Rex barks.
dog.cry = function () {
  console.log('cry');
}
console.log(dog.cry)
console.log(dog.__proto__.cry)


console.log(Object.create({
  greet() { console.log("hello!") }
}).__proto__.greet) // Function: greet()

console.log(({
  greet() { console.log("hello!") }
}).__proto__.greet) // undefined

// This constructor function may be converted to a class declaration.
// class Person {
//    constructor(name) {
//      this.name = name;
//    }
// }
function Person(name) {
  this.name = name;
}

console.log('---')

console.log(Person.prototype.constructor === Person) // true
console.log(Animal.prototype.constructor === Animal) // true

console.log('---')

console.log(typeof Animal, typeof Dog) // function function
console.log(Function.__proto__ === Function.prototype) // true
console.log(Person.__proto__ === Function.prototype) // true
console.log(Animal.__proto__ === Function.prototype) // true
console.log(Dog.__proto__ === Animal) // true
console.log(Object.__proto__ === Function.prototype) // true

console.log(animal.__proto__ === Animal.prototype) // true
console.log(dog.__proto__ === Dog.prototype) // true
console.log(person.__proto__ === Person.prototype) // true
console.log(animal.prototype, dog.prototype, person.prototype) // undefined undefined undefined

console.log('---')

console.log(Dog.prototype.__proto__ === Animal.prototype) // true
console.log(Animal.prototype.__proto__ === Object.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Date.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

console.log('---')

console.log(Person.prototype.constructor === Person) // true
console.log(Animal.prototype.constructor === Animal) // true
console.log(Dog.prototype.constructor === Dog) // true
console.log(Object.prototype.constructor === Object) // true
console.log(Function.prototype.constructor === Function) // true

console.log('---')

console.log(Person.prototype.constructor.prototype.constructor.__proto__ === Function.prototype) // true
console.log((function () { }).__proto__ === Function.prototype) // true
console.log((function () { }) instanceof Object) // true
console.log((function () { }).prototype.__proto__ === Object.prototype) // true

console.log('---')

console.log(typeof (() => { })) // function
console.log((() => { }).__proto__ === Function.prototype) // true
// arrow function can't be used as constructor
console.log((() => { }).prototype === undefined) // true

console.log(Object.getOwnPropertyNames(dog)) // [ 'name', 'breed', 'cry' ]
console.log(Object.getOwnPropertyNames(dog.__proto__)) // [ 'constructor', 'speak' ]

console.log(Dog.prototype.constructor === Dog) // true
console.log(Function.prototype.constructor === Function) // true
console.log(Dog.constructor === Function) // true
console.log(Function.constructor === Function) // true

console.log(dog.constructor === Dog) // true
console.log(dog.__proto__.breed === undefined) // true
console.log(dog.speak === dog.__proto__.speak) // true
