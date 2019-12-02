import React from 'react'
import Routes from './Routes'
import Header from './Components/Header/Header'
import './App.css'
import { withRouter } from 'react-router-dom'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Coffee from './Components/Coffee/Coffee'

function App(props) {
  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_peAyS45BCBUt6T7UbIUKX3Xc00xVdPUzlP">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <Coffee />
          </Elements>
        </div>
      </StripeProvider>
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
