
import './App.css'

function App() {
  let counter = 5
  function addValue() {
    counter = counter + 1
    console.log(counter);
  }
  return (
    <>
      <h1>Astik Codes</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>add +1</button>
      <br />
      <button>value -1</button>
    </>
  )
}

export default App
