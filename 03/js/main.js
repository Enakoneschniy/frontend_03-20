'use strict'
/*const a = 10;
const b = 5;
const res = a / b;
console.log(res)*/

{
  const a = 4;
  const b = 5;
  const res = a + b;
  console.log(res)
}
{
  const a = 4;
  const b = 5;
  const res = a * b;
  console.log(res)
}
{
  let x = 400;
  const a = 4;
  const b = 6;

  if (a < b) {
    x = a + b / 4;
  } else if (a > b) {
    x = a - b + 56;
  }
  console.log(x)
}
{
  const a = '4';
  const b = 4;
  if (a != b) {
    console.log('a != b')
  } else {
    console.log('a = b')
  }
 // !!a  ===  Boolean(a)
  if (!!a) {
    console.log(!!a, !a)
    console.log('a === true')
  }
}
{
  let b = 5;
  let a = (b >= 5) ? 7 : undefined;
  let c = (b >= 5) ? (b <= 10) ? 7 : undefined : undefined;
}
{
  let a = 6;
  let b = 7;

  if (a > b || a === 6 || b === 9) {
   console.log('a === 6')
  }
  if (a > b && a === 6 || b === 7) {
    console.log('OK!')
  }

  /*let x = +prompt('Enter X');
  let y = +prompt('Enter Y');

  if(!isNaN(x) && !isNaN(y)) {
    if(x < y) {
      console.log('x < y')
    } else {
      console.log('x > y')
    }
  } else {
    console.log('Calculate Error!')
  }*/
}
{
  let a = 78;
  a >= 5 && console.log('Hello!')
}
{
  let n = 1;
  while (n <= 10) {
    console.log(n++)
  }
  console.log('--------------------')
  while (true) {
    const n = Math.round(Math.random() * 100)
    console.log(n)
    if(n > 90) {
      break;
    }
  }
}
{
  let n = 1;
  while (n <= 10) {
    if(n % 2 === 0) {
      n++;
      continue;
    }
    console.log(n++)
    //n += 2 // n = n + 2
  }
  do {
    console.log(n++)
  } while (n <= 10)
  let x;
  let y;
  do {
    x = parseFloat(prompt('Enter X'))
    if(isNaN(x)) {
      alert('X should be a number!')
    }
  } while (isNaN(x))

  do {
    y = parseFloat(prompt('Enter Y'))
    if(isNaN(y)) {
      alert('Y should be a number!')
    }
  } while (isNaN(y))

  console.log(`X = ${x}`)
  console.log(`Y = ${y}`)
  let s = 5;
  switch (s) {
    case 4:
      console.log(s);
      break;
    case 5:
      console.log(s);
      break;
    default:
      console.log('Default')
  }

  for(let n = 1; n <= 10; n++) {
    console.log(n)
  }
}





