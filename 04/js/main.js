  'use strict'

  for(let n = 2; n < 10; n++) {
    for(let m = 2; m < 10; m++) {
      console.log(n * m)
    }
  }

  // const arrNumbers1 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrNumbers2 = new Array(10);
  console.log(arrNumbers)
  console.log(arrNumbers2)
  console.log(arrNumbers[4])
  arrNumbers[9] = 89;
  console.log(arrNumbers)
  console.log(arrNumbers.length)
  arrNumbers[arrNumbers.length] = 44;
  arrNumbers[arrNumbers.length] = 67;
  console.log(arrNumbers)
  arrNumbers.push(23, 4555, 767);
  console.log(arrNumbers);
  const latElement = arrNumbers.pop();
  console.log(arrNumbers);
  console.log(latElement);
  arrNumbers.unshift(23, 4555, 767);
  console.log(arrNumbers);
  const firstElement = arrNumbers.shift();
  console.log(arrNumbers);
  console.log(firstElement);

  arrNumbers.splice(15, 0, 333333, 444444)
  console.log(arrNumbers);
  const deleteCount = 3;

  arrNumbers.splice(arrNumbers.length - deleteCount, deleteCount)
  console.log(arrNumbers)
  console.log(arrNumbers.slice(2, 9))
  const arrNumbers3 = arrNumbers.concat([676, 56876, 3423])
  console.log(arrNumbers3)
  console.time('l1')
  for (let i = 0; i < arrNumbers3.length; i++) {
    console.log(`${i}: ${arrNumbers3[i]}`)
  }
  console.timeEnd('l1')

  console.time('l2')
  for (let i = arrNumbers3.length - 1; i >= 0 ; i--) {
    console.log(`${i}: ${arrNumbers3[i]}`)
  }
  console.timeEnd('l2')

  for (let index in arrNumbers3) {
    console.log(`${index}: ${arrNumbers3[index]}`)
  }
  for (let element of arrNumbers3) {
    console.log(element)
  }

  const matrix = [
    [1, 2, 3, 4],
    [11, 21, 31, 41],
    [12, 22, 32, 42]
  ];

  console.log(matrix)

  for (let row of matrix) {
    for (let cel of row) {
      console.log(cel)
    }
  }
  const size = 10;
  const randomMatrix = [];

  for (let row = 0; row < size; row++) {
    randomMatrix[row] = [];
    for (let cel = 0; cel < size; cel++) {
      randomMatrix[row][cel] = (row + 1) * (cel + 1)
    }
  }
  console.log(randomMatrix)

  let str = 'Hello';
  console.log(str[1])
  str = str.replace('e', 'r')
  console.log(str.length)
  console.log(str)

  const arr = [];
  const N = 10;

  for (let i = 1; i <= N; i++) {
    arr.push('x'.repeat(i))
  }
  console.log(arr)



  sayHello('Vasya');
  sayHello('Petya', 345, 345);
  sayHello();
  const res = sum(2, 3)
  console.log(res)

  function repeat() {

  }





