// External Modules
import React from 'react'

// Internal modules
import Home from './Screens/Home/Home'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  )

}
