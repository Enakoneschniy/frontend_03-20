class Car {
  constructor (mileage) {
    this.mileage = mileage
  }
}

class CarCollection {
  #collection = []

  add(car) {
    this.#collection.push(car)
    return this
  }
  get list () {
    return this.#collection
  }
  get totalMileage () {
    return this.#collection.reduce((total, car) => total + car.mileage, 0)
  }
}

const carCollection = new CarCollection()

const totalMileage = carCollection
.add(new Car(233))
.add(new Car(78))
.add(new Car(555))
.add(new Car(44))
.totalMileage
console.log(totalMileage)



let users = [
  {
    name: 'name 1',
    age: 45
  },
  {
    name: 'name 2',
    age: 12
  },
  {
    name: 'name 3',
    age: 56
  },
  {
    name: 'name 4',
    age: 35
  },
  {
    name: 'name 5',
    age: 15
  }
]
users = users.sort((a, b) => {
  if (a.age < b.age) {
    return 1
  } else if(a.age > b.age) {
    return -1
  }
  return 0
})
console.log(users)

Array.prototype.myReduce = function (calcFn, startValue) {
  let total = startValue
  for(let val of this) {
    total = calcFn(total, val)
  }
  return total
}

const sumOfArray = [1, 2, 3, 4].myReduce((sum, num) => sum + num, 0)
console.log(sumOfArray)


let obj = {
  a: 2,
  b: "ddd",
  c: {
    a: 45,
    b: 56,
    k: {
      t: 'dddd',
      h: 'adasdas'
    }
  }
}
function addProp (obj, prop) {
  return {...prop, ...obj}
}

function recurObj (obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      recurObj(obj[key])
    } else {
      console.log(`${key}: ${obj[key]}`)
    }
  }
}
recurObj(obj)
obj = addProp(obj, { h: 56555, j: 'sdsds' })

console.log(JSON.stringify(obj))
