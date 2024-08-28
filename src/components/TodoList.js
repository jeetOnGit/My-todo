import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {

  const [todos, setTodos] = useState([])

  const addTodo = todo =>{
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(todo, ...todos);
  }

  const editTodo = (todoId, newValue) =>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const deleteTodo = id => {
    const removeArr = [...todos].filter(todo =>todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo = id =>{
    let updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodo)
  }

  return (
    <div>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default TodoList