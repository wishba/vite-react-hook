import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import Component1 from './components/propDrilling/Component1'

export const UserContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState('')
  const [user, setUser] = useState('')

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    setUser('Wisnu Bayu')

    const currentDate = new Date()
    setTime(`${currentDate}`)
  }, [])

  return (
    <div>
      <h2>useState example</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />

      <h2>useEffect example</h2>
      <p>{time}</p>
      <hr />

      <h2>useContext example</h2>
      <UserContext.Provider value={user}>
        <p>{`Hello ${user}!`}</p>
        <Component1 />
      </UserContext.Provider>
      <hr />

      <h2>useRef example</h2>
      <button onClick={focusInput}>Focus to the input</button>
      <p>
        <input ref={inputRef} type="text" />
      </p>
      <hr />
    </div>
  )
}

export default App
