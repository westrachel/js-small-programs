import axios from 'axios'
const BASE_URL = 'http://localhost:3001/persons'

const parseData = (request) => {
  return request.then(response => response.data)
}

const retrieveAll = async () => {
  const request = axios.get(BASE_URL)
  return parseData(request)
}

const addPerson = (newPerson) => {
  const request = axios.post(BASE_URL, newPerson)
  return parseData(request)
}

const deletePerson = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`)
}

const updatePerson = (id, newDetails) => {
  const request = axios.put(`${BASE_URL}/${id}`, newDetails)
  return parseData(request)
}

export default {
  retrieveAll,
  addPerson,
  deletePerson,
  updatePerson
}


