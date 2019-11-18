import React from 'react'
import ToDo from './Components/ToDo/ToDo'
import Dash from './Components/Dash/Dash'
import Companies from './Components/Companies/Companies'
import Schools from './Components/Schools/Schools'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dash />
        <ToDo />
        <Companies />
        <Schools />
      </header>
    </div>
  )
}

export default App
