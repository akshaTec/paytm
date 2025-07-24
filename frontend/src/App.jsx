<<<<<<< Updated upstream
=======
import { useState } from 'react'
import './App.css'
import { Heading } from './components/Heading'
import { SubHeading } from './components/SubHeading'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { BottomWarning } from './components/BottomWarning'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { AppBar } from './components/AppBar'
import { Balance } from './components/Balance'
import { Users } from './components/UserComponent'
import { SendMoney } from './pages/SendMoney'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< Updated upstream
    <div>
        Hello world
    </div>
=======
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/sendmoney' element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> Stashed changes
  )
}

export default App
