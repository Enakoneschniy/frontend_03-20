'use strict'
const [s, m] = sum(3, 5, 6, 1, 1)
console.log(`s = ${ s }, m = ${ m }`)

function sum (...args) {
  let sum = 0
  let mult = 1
  for (const val of args) {
    sum += val
    mult *= val
  }
  return [sum, mult]
}

/*const [s, m] = sum(3, 5, 6, 1, 1)
 console.log(`s = ${s}, m = ${m}`)*/

const arrNumbers = [1, 3, 46, 56, 34, 546]

let [a, b, c, ...array] = [1, 3, 46, 56, 34, 546]
// const a = 1, b = 3, c = 46, array = [56, 34, 546]
console.log(a, b, c)
b = 5
console.log(a, b, c)
console.log(arrNumbers)
console.log(array)
const array3 = [...array, ...arrNumbers]
console.log(array3)
console.log('-----------')
let x = 1
let y = 4;
[x, y] = [y, x]
console.log(x, y)
const inc = function (value = 0) {
  return value + 1
}
const dec = value => value - 1

console.log(inc())
console.log(dec(3))

function testFunc (a, b, cbFn) {
  cbFn(a + b)
}

function log (message) {
  console.log(message)
}

testFunc(5, 3, message => console.log(message))

setTimeout(() => console.log('Hello!'), 5000)

function calc (a) {
  const c = 4
  return function (b) {
    return a + b + c
  }
}

let secondFunc = calc(5)
console.log(secondFunc(8))
console.log(secondFunc(9))

console.log(calc(5)(5))

const numbers = [1, 2, 3, 4]
console.log('--------------------')
numbers.forEach(val => console.log(val))

const even = numbers.filter(item => item % 2 === 0)
const even1 = numbers.filter(function (item) {
  return item % 2 === 0
})
const even2 = numbers.filter(isEven)

function isEven (item) {
  return item % 2 === 0
}

console.log(even)

const powArray = numbers
.filter(isEven)
.map(item => item ** 2)
.reduce((sum, item) => sum - item, 1)
console.log(powArray)

console.log(
['hello', ' ', 'world'].reduceRight((str, item) => str + item, '')
)
