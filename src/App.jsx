import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  // let counter = 5

  const Increase = () => {
    console.log("cliked", counter)
    // counter= counter + 1;
    setCounter(counter + 1)
  }

  const Decrease = () => {
    console.log("Clicked", counter)
    if (counter != 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={Increase}>Increase</button>
      <br />
      <br />
      <button onClick={Decrease}>Decrease</button>

    </>
  )
}

export default App
