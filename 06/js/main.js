'use strict'
const n = 5
function loopFactorial (n) {
  let res = 1
  for (let i = 2; i <= n; i++) {
    res *= i
  }
  return res
}

console.log(loopFactorial(n))

function recurFactorial (n) {
  if (n === 1) {
    return 1
  }

  return n * recurFactorial(n - 1)
}
console.log(recurFactorial(n))

/*
function foo () {
    bar()
}

function bar () {
  foo()
}*/
const propertyName = 'test'

const user = {
  propertyName, // propertyName: propertyName
  name: 'User',
  age: 35,
  firstName: 'Vasya',
  'last name': 'Petrov',
  [propertyName]: 'Hello',
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}`)
  }
}
user.sayHello()

console.log(user)
user.test = 'sdfsssdf'
console.log(user.test)
console.log(user[propertyName])
console.log(user.name)
console.log(user['name'])
console.log(user.firstName)
console.log(user['last name'])

const articles = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Vasya Pupkin',
      nickname: 'vasya_pupkin'
    },
    title: 'Some title 1',
    shortDescription: 'some short description',
    likesCount: 35,
    commentsCount: 45
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Vasya Pupkin',
      nickname: 'vasya_pupkin'
    },
    title: 'Some title 2',
    shortDescription: 'some short description 2',
    likesCount: 56,
    commentsCount: 334
  },
  {
    id: 3,
    author: {
      id: 44,
      name: 'Petya Petrov',
      nickname: 'petya_petrov'
    },
    title: 'Some title 3',
    shortDescription: 'some short description 3',
    likesCount: 567,
    commentsCount: 12
  }
]

const articleContainer = document.getElementById('article-list')

articleContainer.innerHTML = getRenderedArticles(articles)

function getRenderedArticles(items) {
  return items.reduce((html, item) => html + `
    <li>
      <article>
        <h1>${item.title}</h1>
        <div class="meta-info">
          <strong>Likes: </strong>(${item.likesCount});
          <strong>Comments: </strong>(${item.commentsCount});
        </div>
        <div>${item.shortDescription}</div>
      </article>
    </li>`, '')
}


navigator.geolocation.getCurrentPosition((pos) => {
console.log(pos)
})
const video = document.getElementById("videoElement");

/*if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (err0r) {
    console.log("Something went wrong!");
  });
}*/


