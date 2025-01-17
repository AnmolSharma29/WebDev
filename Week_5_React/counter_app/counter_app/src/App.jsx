//Hook
import React, { useState } from 'react';
import './App.css'

// const state = {
//   count: 0
// }

function App() {
  const [count, setCount] = React.useState(0); //[0,func]
  
  // function onClickHandler(){
  //   setCount(count + 1);
  // }

  // return (
  //   <button onClick={onClickHandler}>Counter {count}</button>
  // )

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
  
  function onButtonClick(){
    props.setCount(props.count + 1);
  }

  // return React.createElement(
  //   'button',
  //   { onClick: onButtonClick },
  //   `Counter ${props.count}`
  // );

  return <button onClick={onButtonClick}>Counter {props.count}</button>
}

export default App
