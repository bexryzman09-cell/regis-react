import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPages from './pages/RegisterPages'
import WelcomePages from './pages/WelcomePages'
import HomePages from './pages/HomePages'
import LoginPages from './pages/LoginPages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/home" element={<HomePages />} />
      </Routes>
    </>
  )
}

export default App
