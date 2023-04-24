import { useState } from 'react'
import Footer from './Footer.js'
import Anecdote from './Anecdote.js'
import AnecdoteList from './AnecdoteList.js'
import About from './About.js'
import CreateNew from './CreateNew.js'

import { Routes, Route, Link, useMatch } from 'react-router-dom'

const App = () => {

  const padding = {
    paddingRight: 5
  }

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const anecdotePath = useMatch('/anecdotes/:id')
  const anecdote = anecdotePath ? 
                   anecdotes.find(quote => quote.id === Number(anecdotePath.params.id)) : null

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <div>
        <h1>Software anecdotes</h1>
        <Link style={padding} to="/">Anecdotes</Link>
        <Link style={padding} to="/create">Create New</Link>
        <Link style={padding} to="/about">About</Link>
      </div>
      <div>{notification}</div>
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


