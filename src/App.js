import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Overview/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
