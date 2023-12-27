import { useState } from 'react'
import Tepm from './components/Tepm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Testing</h1>
      <Tepm className="Om Kumar" btnText="Goo"/>
      <Tepm className="Muskan" />
    </>
  )
}

export default App
