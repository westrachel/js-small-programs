import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export const useField = (type, name) => {
  const [value, setValue] = useState('')
  
  const onChange = (e) => setValue(e.target.value)
  const reset = () => setValue('')

  const obj = { type, value, onChange}
  Object.defineProperty(obj, `reset${name}`, reset)

  return obj
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>    
    <App />
  </Router>
)