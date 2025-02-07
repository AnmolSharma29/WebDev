import React, { useState } from 'react'
import './App.css'
import { useActionState } from 'react';

// function App() {
//   const [title, setTitle] = useState("My name is Anmol");

//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }

//   // it is the parent element of the header, it can be <div>, <>
//   return <>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//     <Header title="My name is Sharma"></Header>
//   </>
// }

function App() {
  
  return <>
    <HeaderWithButton/>
    <Header title = "Anmol"></Header>
    <Header title="My name is Sharma"></Header>
    <Header title="My name is Sharma2"></Header>
  </>
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Anmol");
  
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }

  return <>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </>
}

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

const Header = React.memo(
  function ({title}){
    return <div>
      {title}
    </div>
  }
)


export default App
