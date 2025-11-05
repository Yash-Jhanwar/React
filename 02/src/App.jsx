import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(2); 
  const addValue = () =>{
    console.log("value added",Math.random());
    setCounter(counter + 1); 
  }
  const removeValue = () => {
    if(counter){
      setCounter(counter - 1);
    }
    else{
      alert("value cannot be negative");
    }
      
}

  return ( 
    <>
      <h1>chai aur yash</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
        >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
