import { useState } from 'react'
import search from './Components/search'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>game listing app</h1>
      <main>
        <search />
      </main>
      <div className="card">
        
      </div>
     
    </>
  )
}

export default App
