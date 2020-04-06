'use strict'

/*console.log('Test async')
setTimeout(function () {
  console.log('Hello')
}, 2000)
setTimeout(function () {
  console.log('Async')
}, 1000)
console.log('World')*/


function gedDisk (diskNum, cbFn) {
  console.log(`Please put disk #${diskNum}`)
  const time = Math.round(Math.random() * 2000)
  setTimeout(() => {
    cbFn(diskNum)
  }, time)
}

function install (diskNum, cbFn) {
  console.log(`Installing from disk #${diskNum}`)
  const time = Math.round(Math.random() * 4000)
  setTimeout(() => {
    console.log(`Disk #${diskNum} installed!`)
    cbFn(diskNum)
  }, time)
}
function main () {
  gedDisk(1, (diskNum) => {
    install(diskNum, (diskNum) => {
      gedDisk(diskNum + 1, (diskNum) => {
        install(diskNum, (diskNum) => {
          gedDisk(diskNum + 1, (diskNum) => {
            install(diskNum, (diskNum) => {
              gedDisk(diskNum + 1, (diskNum) => {
                install(diskNum, (diskNum) => {
                  gedDisk(diskNum + 1, (diskNum) => {
                    install(diskNum, () => {
                      console.log('COMPLETE!')
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

// console.log('FFFFFFFFF')

function gedDiskPromise (diskNum) {
  return new Promise((resolve) => {
    console.log(`Please put disk #${ diskNum }`)
    const time = Math.round(Math.random() * 2000)
    setTimeout(() => {
      resolve(diskNum)
    }, time)
  })
}

function installPromise (diskNum) {
  return new Promise((resolve) => {
    console.log(`Installing from disk #${ diskNum }`)
    const time = Math.round(Math.random() * 4000)
    setTimeout(() => {
      console.log(`Disk #${ diskNum } installed!`)
      resolve(diskNum)
    }, time)
  })
}

function mainPromise () {
  gedDiskPromise(1)
  .then(installPromise)
  .then(diskNum => gedDiskPromise(diskNum + 1))
  .then(installPromise)
  .then(diskNum => gedDiskPromise(diskNum + 1))
  .then(installPromise)
  .then(diskNum => gedDiskPromise(diskNum + 1))
  .then(installPromise)
  .then(() => {
    console.log('COMPLETE!')
  })
}

//mainPromise()

async function mainAsync () {
  for (let i = 0, diskNum = await gedDiskPromise(1); i < 7; i++) {
    await installPromise(diskNum)
    if(i !== 6) {
      diskNum = await gedDiskPromise(diskNum + 1)
    }
  }
  console.log('COMPLETE')
}
// mainAsync()

(async () => {
  'use strict'

  let users = await api('http://localhost:8080/users?_sort=name&_order=desc')
  const usersContainer = document.querySelector('.users-list')
  usersContainer.innerHTML = getRenderedUsers(users)
  document.querySelector('.sort')
  let direction = 'asc'
  document.querySelector('.sort-name')
  .addEventListener('click', async () => {
    users = await api(`http://localhost:8080/users?_sort=name&_order=${direction}`)
    /*users = sortBy(users, 'name', direction) // desc*/
    usersContainer.innerHTML = getRenderedUsers(users)
    direction = direction === 'asc' ? 'desc' : 'asc'
  })

  document.querySelector('.sort-email')
  .addEventListener('click', async () => {
    users = await api(`http://localhost:8080/users?_sort=email&_order=${direction}`)
    /*users = sortBy(users, 'email', direction) // desc*/
    usersContainer.innerHTML = getRenderedUsers(users)
    direction = direction === 'asc' ? 'desc' : 'asc'
  })
})()
async function api (url, options = {}) {
  return (await fetch(url, options)).json()
}
function getRenderedUsers (users) {
  return users.reduce((html, user) => html + `
  <li class="users-list__item">
    <div>${user.name}</div>
    <div>${user.email}</div>
  </li>`, '')
}
function sortBy (users, propertyForSort, direction = 'asc') {
  return users.sort((userA, userB) => {
    if(userA[propertyForSort] > userB[propertyForSort]) {
      return direction === 'asc' ? 1 : -1
    } else if (userA[propertyForSort] < userB[propertyForSort]) {
      return direction === 'asc' ? -1 : 1
    }
    return 0
  })
}
/*api('http://localhost:8080/users/1', {
  method: 'DELETE'
})*/
/*function f2 () {
  f3()
}
function f3 () {
  f2()
}*/

/*function f1 (a) {
  const b = ''
  return function () {
    return a + b
  }
}*/
