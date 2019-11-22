const remoteURL = "http://localhost:5002"

export default {
  get(tableName, id) {
    return fetch(`${remoteURL}/${tableName}/${id}`).then(result => result.json())
  },
  getAll(tableName) {
    return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
  },
  delete(tableName, id) {
    return fetch(`http://localhost:5002/${tableName}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(tableName, newObject) {
    return fetch(`${remoteURL}/${tableName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  update(tableName, editedAnimal) {
    return fetch(`${remoteURL}/${tableName}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}