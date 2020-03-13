'use strict'

var name = 'Petya'
let name1 = 'Petya'
const name2 = 'Petya' // String
/*
 Это блочный
 комментарий
 */
const PI = 3.14 // Number
const age = 27 // Number
const isTrue = true // Boolean
let undef // undefined
// alert(typeof undef)
undef = 56 // Number
// alert(typeof undef)
undef = 'sdsd' // String
// alert(typeof undef)
let zeroVar = null // null
console.log(typeof zeroVar) // object ???
const str = `Привет
Мир
`
console.log(str)

const str1 = 'Привет Мир'

let str2 = +'123.2r'

let num = Number(str2) // становится числом 123

console.log(num) // number
console.log(+str2) // number
console.log(parseFloat(str2)) // number
console.log(parseInt(str2)) // number

let counter = 2
console.log(++counter) // 3
console.log(counter) // 3
let a = 3
let b = 4
let c = 8
let res = a++ + ++b * --a + --c
console.log(res)

