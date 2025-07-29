import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Messages from './pages/messages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
