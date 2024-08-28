import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todos, completeTodo, deleteTodo, editTodo}) {

  const [edit, setEdit] = useState({
    id: null,
    value:''
  })
  const submitUpdate = value =>{
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value:''
    })
  }
  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className='icons'>
        <i className="fa-solid fa-trash deleteTodo" onClick={() => deleteTodo(todo.id)}/>
        <i className="fa-solid fa-pen-to-square editIcon" onClick={() => setEdit({id: todo.id, value:todo.text})}/>
      </div>
    </div>
  ))
}

export default Todo