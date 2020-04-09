'use strict'
const users = [
  {
    id: 1,
    name: 'ddd',
    email: 'email1@gmail.com'
  },
  {
    id: 2,
    name: 'ggg',
    email: 'email2@gmail.com'
  }
]

const tbody = document.getElementById('tbody')
tbody.addEventListener('click', (e) => {
  const parent = e.target.parentNode
  if (parent.classList.contains('list-item')) {
    const userId = +parent.getAttribute('data-uid')
    const user = users.find(user => user.id === userId)
    console.log(user)
  }
})
tbody.innerHTML = getRenderedUsers(users)

function getRenderedUsers (users) {
  return users.reduce((html, user) => html + `
    <tr class="list-item" data-uid="${ user.id }">
      <td>${ user.id }</td>
      <td>${ user.name }</td>
    </tr>
  `, '')

}

async function getUsers () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //console.log(await response.json())
  return response.json()
}

function show () {
  getUsers()
  .then(function (users) {
    console.log(users)
  })
  .catch(function(error) {

  })
  .finally()
}

show()





