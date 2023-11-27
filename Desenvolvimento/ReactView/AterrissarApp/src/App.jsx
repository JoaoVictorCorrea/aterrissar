import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup';
import AdminPage from './pages/AdminPage';
import AdminVoo from './pages/AdminVoo';
import AdminEmpresa from './pages/AdminEmpresa'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/painel' element={<AdminPage/>} /> 
          <Route path='/adminVoo' element={<AdminVoo/>} /> 
          <Route path='/adminEmpresa' element={<AdminEmpresa/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
