import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { LandingPage } from './Pages/LandingPage'
import { LoginPage } from './Pages/Login/index'


export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/dashboard" element={<LandingPage />} />
          <Route path="/Login"  element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}



