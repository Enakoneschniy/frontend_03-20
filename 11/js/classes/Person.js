import AgeOutOfRangeError from './AgeOutOfRangeError'

export default class Person {
  #religion = 'xxx'
  #age = 'xxx'
  constructor (first, last, age, gender, interests) {
    this.name = { first, last }
    this.#age = age
    this.gender = gender
    this.interests = interests
  }
  get religion () {
    return this.#religion
  }
  set religion (value) {
    if (typeof value === 'string') {
      this.#religion = value
    }
  }
  get age () {
    return this.#age
  }
  set age (value) {
    if (value >= 0) {
      this.#age = value
    } else {
      throw new AgeOutOfRangeError('Wrong age!')
    }
  }
  myMethod (a, b) {
    return a + b
  }

  get greeting () {
    return `I'm ${this.name.first}.`
  }
  get bio () {
    return `${this.name.first} ${this.name.last} is ${this.#age} years old. He likes ${this.interests.join(' and ')}.`
  }
}
