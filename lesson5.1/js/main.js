'use strict'
import { fill, flattenDeep } from 'lodash'

const binaryArray = [0, 0, 1]
const res = binaryArray.reduce((str, item) => str + item, '')
console.log(res)
const numbersArray = [1, 2, 4, 6, 4]
const index = numbersArray.indexOf(4)
console.log(index)

let index1

for (let index in numbersArray) {
  if (numbersArray[index] === 4) {
    index1 = +index
    break
  }
}
console.log(index1)
let matrix = new Array(10);
let row = new Array(10);
fill(row, 0);
fill(matrix, row);
console.log(matrix)
const arr = [1, [2, [3, [4]], 5]];
const resArray = flattenDeep(arr);
console.log(arr)
console.log(resArray)
const numbersArray1 = [1, 2, 4, -6, 4]
let sum = 0;
for(const item of numbersArray1) {
  if(item < 0) {
    break
  }
  sum += item
}
console.log(sum)
