import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) =>{
      setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }

  return (


    <form className='todoForm' onSubmit={handleSubmit}>
        {props.edit ? (
          <>
              <input className='todoInput edit' type="text" placeholder='update your todo' value={input} name='text' onChange={handleChange} ref={inputRef}/>
              <button className='todoBtn edit'>Update Todo</button>
          </>
        ):
        (<>
            <input className='todoInput' type="text" placeholder='Add your todo' value={input} name='text' onChange={handleChange} ref={inputRef}/>
              <button className='todoBtn'>Add Todo</button>
        </>)
        }
      
    </form>
  )
}

export default TodoForm