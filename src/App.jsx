import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import PropDrillingLv1 from './components/PropDrillingLV1'
import useFetch from './hooks/useFetch'

export const UserContext = createContext()

function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

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
      <h2>useState</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />

      <h2>useEffect</h2>
      <p>{time}</p>
      <hr />

      <h2>useContext</h2>
      <UserContext.Provider value={user}>
        <p>{`Hello ${user}!`}</p>
        <PropDrillingLv1 />
      </UserContext.Provider>
      <hr />

      <h2>useRef</h2>
      <button onClick={focusInput}>Focus to the input</button>
      <p>
        <input ref={inputRef} type="text" />
      </p>
      <hr />

      <h2>Custom Hook</h2>
      <ul>
        {data?.slice(0, 3).map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <hr />
    </div>
  )
}

export default App
