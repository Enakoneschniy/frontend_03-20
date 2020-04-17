import Person from './Person'

export default class Teacher extends Person {
  constructor (first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests)
    this.subject = subject
  }
  get greeting () {
    return `Aloha! ${super.greeting}`
  }
}
