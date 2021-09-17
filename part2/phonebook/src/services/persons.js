import axios from 'axios'
const baseUrl = '/api/persons'

//returns all persons from db
const getAll = () => {
  return axios.get(baseUrl)
}

//creates new person in db
const create = newObject => {
  return axios.post(baseUrl, newObject)
}

//updates info about person in db
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

//removes user from db
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const exportedObject = {
    getAll,
    create,
    update,
    remove
}

export default exportedObject