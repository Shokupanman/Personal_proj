import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import Swal from 'sweetalert2'
import './Coffee.scss'

class Coffee extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: 'Name' })
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    })
    console.log(response)
    if (response.ok) Swal.fire('Thank you so much!')
    if (response.ok) this.setState({ complete: true })
  }

  render() {
    if (this.state.complete)
      return (
        <div className="gratzi">
          <h1 className="headi">Thank you for your donation!!</h1>
        </div>
      )
    return (
      <div className="coffeeApp">
        <h1 className="headi2">Buy me a coffee??</h1>
        <p className="landerC">
          I am a new and inexpereinced developer who is really looking to make a
          difference in the world! I have a lot of big goals and have no idea
          how to ask you for money! Well, maybe think about sending a 3$
          donation?????????/
        </p>
        <div className="checkout">
          <div className="paymentBox">
            <p className="texti">Thank you so much!</p>
            <CardElement />
            <button onClick={this.submit}>Donate!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default injectStripe(Coffee)
