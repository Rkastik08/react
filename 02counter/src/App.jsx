import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5)
  function addValue() {
    console.log(counter);
    if (counter == 20) {
      counter = 4
      alert("It can not be increased more")  
    }
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1) // } this will just print 16 because useState is 15 
    //to update it mentioned times:-
    setCounter((prevCounter) => counter + 1) //just returns a value so that it will also change the value of useState.
  }
    
  function decreaseValue(){
    console.log(counter)
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Astik Codes</h1>
      <h2 className='font-semibold'>Counter Value: {counter}</h2>
      <button onClick={addValue}>add +1</button>
      <br />
      <button className='border-blue-400 hover:border-fuchsia-400' onClick={decreaseValue}>value -1</button>
    </>
  )
}

export default App
