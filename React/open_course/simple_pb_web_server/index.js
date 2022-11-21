const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny', {
  immediate: true,	
  skip: function(req, res) { return req.method !== 'POST' }
}))


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
  const info = `<div>Phonebook has info for ${persons.length} people.
                <br>${new Date(Date.now()).toString()}</div>`
  response.send(info)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)   
})			

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => id === person.id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end() 
  }
})

app.delete('api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => id !== person.id )

  response.status(204).end()
})


app.post('api/persons', (request, response) => {
  const newPerson = request.body

  const exists = persons.any(person => {
    return person.name.toLowerCase() === newPerson.name.toLowerCase()
  })

  if (!newPerson.name && !newPerson.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (exists) {
    return response.status(400).json({
      error: 'contact already exists'
    })
  }
 
  newPerson.id = Math.ceil(Math.random() * 100000000)
  persons = persons.concat(newPerson)
  response.json(newPerson)
})


const PORT = 3001
app.listen(PORT)
console.log(`Server is running on port ${PORT}`)
