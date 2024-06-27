import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setcounter] = useState(15)
const addvalue = () => {
  if(counter + 1>20){
    alert("Limit Exceded")
  }
  else if(counter +1<20){
  setcounter(counter+1)
  }
}
const removevalue = () => {
  counter = counter - 1
  console.log(counter);
  setcounter(counter)
}

  return (
    <>
      <h1>Hii Jay {counter}</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
      
    </>
  )
}

export default App
