(async () => {
  'use strict'
  // DOM Section
  const tableBody = document.querySelector('.table-body')
  const addBtn = document.querySelector('.add-user')
  const newUserForm = document.querySelector('.add-user-form')
  // DOM Section

  // Data Section
  let users = await getUsers()
  // Data Section

  // Events Section
  newUserForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = getFormData(e.target)
    const user = await createUser(data)
    users.push(user)
    tableBody.innerHTML = getRenderedTableBody(users)
  })
  addBtn.addEventListener('click', () => {
    showModal('#add-modal')
  })
  tableBody.addEventListener('click', async (e) => {
    if (e.target.classList.contains('user-name')) {
      const userId = +e.target.getAttribute('data-uid')
      const user = users.find(user => user.id === userId)
      showModal('#info-modal', getRenderedModalBody(user))
    } else if (e.target.classList.contains('remove-btn')) {
      const userId = +e.target.getAttribute('data-uid')
      const userIndex = users.findIndex(user => user.id === userId)
      if (userIndex !== -1) {
        await removeUser(userId)
        users.splice(userIndex, 1)
        tableBody.innerHTML = getRenderedTableBody(users)
      }
    }
  })
  // Events Section

  // MAIN
  tableBody.innerHTML = getRenderedTableBody(users)

  // MAIN
  async function getUsers () {
    return (await fetch('http://localhost:8080/users')).json()
  }
  async function removeUser (id) {
    await fetch(`http://localhost:8080/users/${id}`, {
      method: 'DELETE'
    })
  }
  function getRenderedTableBody (users) {
    return users.reduce((html, { id, name, username, email, website }) => html + `
    <tr>
      <td class="user-name" data-uid="${id}">${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${website}</td>
      <td>
        <button data-uid="${id}" class="remove-btn">Remove</button>
      </td>
    </tr>`, '')
  }
  function getRenderedModalBody (user) {
    return `
      <div>
        <strong>Name:</strong> ${user.name}
      </div>
      <div>
        <strong>Username:</strong> ${user.username}
      </div>
      <div>
        <strong>Email:</strong> ${user.email}
      </div>
      <div>
        <strong>Website:</strong> ${user.website}
      </div>
      <div>
        <strong>Phone:</strong> ${user.phone}
      </div>
      <div>
        <strong>Company Name:</strong> ${user.company.name}
      </div>
      <div>
        <strong>Company Catch Phrase:</strong> ${user.company.catchPhrase}
      </div>
      <div>
        <strong>Company bs:</strong> ${user.company.bs}
      </div>
    `
  }
  async function createUser (user) {
    return (await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })).json()
  }
  function getFormData (form) {
    const formData = Array.from(new FormData(form))
    const resObject = {}
    formData.forEach(item => {
      if(item[0].indexOf('.') === -1) {
        resObject[item[0]] = item[1]
      } else {
        const props = item[0].split('.')
        if(!resObject.hasOwnProperty(props[0])) {
          resObject[props[0]] = {
            [props[1]]: item[1]
          }
        } else {
          resObject[props[0]][props[1]] = item[1]
        }
      }
    })
    return resObject
  }
  function showModal(container, content = '') {
    const modal = document.querySelector(container)
    const modalBody = modal.querySelector('.modal-body')
    if(!!content) {
      modalBody.innerHTML = content
    }
    modal.style.display = 'block'
    const modalWidth = modal.offsetWidth / 2;
    const modalHeight = modal.offsetHeight / 2;
    modal.style.left = `calc(50% - ${modalWidth}px)`
    modal.style.top = `calc(50vh - ${modalHeight}px)`
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    document.body.appendChild(overlay)
    overlay.addEventListener('click', () => {
      modal.style.display = 'none'
      overlay.remove()
    })
  }
})();
