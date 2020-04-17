/*import * as consts from './constants'

 console.log(consts.CONST_1)
 console.log(consts.CONST_3)*/

import Person from './classes/Person'
import Teacher from './classes/Teacher'
import AgeOutOfRangeError from './classes/AgeOutOfRangeError'

const p1 = new Person('Nik', 'Claus', 34, 'male', ['sport', 'music'])
const t1 = new Teacher('Alex', 'Braun', 56, 'male', ['sport', 'music'], 'History')

console.log(p1)
console.log(t1)
console.log(t1.age)
console.log(p1.religion)
p1.religion = 'yyy'
p1.religion = 6666
try {
  t1.age = -12
  console.log(t1.age)
} catch (error) {
  console.log(error instanceof AgeOutOfRangeError)
  console.warn(error.name)
}
console.log(t1 instanceof Person)
console.log(p1.religion)
console.log(p1.greeting)
console.log(t1.greeting)

// console.log(Object.keys(p1))

class Helper {
  static pow(num, pow) {
    return num ** pow
  }
}

console.log(Helper.pow(3, 2))


