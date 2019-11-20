import React from 'react'
import Routes from './Routes'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="headerBox">
        <header className="head">
          <Header />
        </header>
      </div>
      <div>{Routes}</div>
    </div>
  )
}

export default App
