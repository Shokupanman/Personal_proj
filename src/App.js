import React from 'react'
import Routes from './Routes'
import Header from './Components/Header/Header'
import './App.css'
import { withRouter } from 'react-router-dom'
// import { Elements, StripeProvider } from 'react-stripe-elements'
// import Coffee from './Components/Coffee/Coffee'

function App(props) {
  return (
    <div className="App">
      <div className="headerBox">
        <header className="head">
          {props.location.pathname !== '/' &&
          props.location.pathname !== '/register' ? (
            <Header />
          ) : (
            <></>
          )}
        </header>
      </div>
      <div>{Routes}</div>
    </div>
  )
}

export default withRouter(App)
