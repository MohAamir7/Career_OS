import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DashBoard from './pages/Dashboard/DashBoard'
import DashBoardLayout from './Layouts/DashBoardLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DashBoardLayout>
      <DashBoard></DashBoard>
    </DashBoardLayout>
    </>
  )
}

export default App
