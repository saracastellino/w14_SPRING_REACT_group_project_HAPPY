const baseURL = 'http://localhost:8080/users/'

export default {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addUsers(user) {
      console.log(user);
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  updateUser(user) {
    // return fetch(baseURL + pirate._id, {
    return fetch(baseURL + user.id, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
  deleteUser(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
