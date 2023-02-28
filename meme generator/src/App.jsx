import { useState } from 'react'
import './App.css'
import Meme from './components/Meme'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <Meme />
    </div>
  )
}

export default App
