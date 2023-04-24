import { useNavigate } from 'react-router-dom'
import { useField } from './index.js'


const CreateNew = (props) => {
  const navigate = useNavigate()

  const {resetAuthor, ...author} = useField('text', 'Author')
  const {resetContent, ...content}  = useField('text', 'Content')
  const {resetInfo, ...info} = useField('text', 'Info')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
     content: content.value,
     author: author.value,
     info: info.value,
     votes: 0
    })
    props.setNotification(`created new anecdote: "${content.value}"`)
    setTimeout(() => props.setNotification(''), 10000)
    navigate('/')
  }

  const resetInputs = (e) => {
    e.preventDefault()
    resetAuthor()
    resetContent()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content: <input {...content} />
        </div>
        <div>
          author: <input {...author} />
        </div>
        <div>
          url for more info: <input {...info} />
        </div>
        <button>create</button>
        <button onClick={resetInputs}>Reset</button>
      </form>
    </div>
  )

}
export default CreateNew
