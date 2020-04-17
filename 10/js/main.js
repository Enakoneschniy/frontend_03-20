'use strict'
Number.prototype.sum = function () {
  return this.reduce((sum, item) => sum + item, 0)
}

function Person (first, last, age, gender, interests) {
  this.name = { first, last }
  this.age = age
  this.gender = gender
  this.interests = interests
}

Person.prototype.greeting = function() {
  console.log(`Hey! I'm ${this.name.first}.`)
}
Person.prototype.bio = function () {
  console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests.join(' and ')}.`)
}

function Teacher (first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests)
  this.subject = subject
}
Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.greeting = function () {
  console.log('Aloha!')
  Person.prototype.greeting.call(this)
  console.log('Bye!')
}


const person1 = new Person('Nik', 'Claus', 34, 'male', ['sport', 'music'])
const teacher1 = new Teacher('Alex', 'Braun', 56, 'male', ['smoke', 'beer'], 'Sport')
console.log(person1)
console.log(teacher1)
person1.greeting()
teacher1.greeting()
teacher1.bio()




/*console.log(person1)
person1.greeting()
person1.bio()

console.log(new Object({
  name: 'ddd',
  age: 334
}))

const person2 = Object.create(person1)
console.log(person2)
person2.bio()*/




