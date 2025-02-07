import React, { useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "Go to gym",
    description: "Gym jao bc"
  },{
    id:2,
    title: "Go to office",
    description: "Office jao bc"
  },{
    id:3,
    title: "Go to home",
    description: "Home jao bc"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

export default App
