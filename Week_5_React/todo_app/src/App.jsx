import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    complated: false
  },{
    title: "Study DSA",
    description: "Go to DSA from 9-10",
    complated: true
  }])

  return (
    <div>
      {/* <Todo title={todo[0].title} description={todo[0].description}></Todo>
      <Todo title={todo[1].title} description={todo[1].description}></Todo> */}

      {/* for loop */}
      {todo.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
}

export default App
