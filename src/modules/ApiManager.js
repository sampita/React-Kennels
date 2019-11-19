const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll(tableName) {
    return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
  }
}