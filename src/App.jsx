import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Body from './Components/body/Body'
import Footer from './Components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-2 bg-gray-200 '>
       <Header />
       <Body />
       <Footer />
    </div>
    </>
  )
}

export default App
