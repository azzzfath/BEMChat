import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Messages from './pages/messages'
import Login from './pages/login'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
