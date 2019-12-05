import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
require('dotenv').config()

console.log(process.env)

ReactDOM.render(
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
    <Provider store={store}>
      <HashRouter>
        <Elements>
          <App />
        </Elements>
      </HashRouter>
    </Provider>
  </StripeProvider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
