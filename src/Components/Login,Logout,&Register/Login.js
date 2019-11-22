import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { updateUserInfo } from '../../ducks/reducer'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import './Login.scss'
import logo from '../../logo.png'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  login = () => {
    const { email, password } = this.state
    axios
      .post('/auth/login', { email, password })
      .then(res => {
        this.props.updateUserInfo(res.data.user)
        Swal.fire(res.data.message)
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        Swal.fire(err.response.data.message)
      })
  }

  ///value={this.state.password}
  ///onChange={e => this.handleChange('password', e.target.value)}
  //value={this.state.email}
  //onChange={e => this.handleChange('email', e.target.value)}
  render() {
    return (
      <div className="regidiv">
        <section className="bigOne">
          <div>
            <img className="logo" src={logo} />
          </div>
          <div className="register">
            <div className="inputbk2">
              <span className="input">
                <div className="login2">
                  <div className="emailInput2">
                    <input
                      className="Input-text"
                      type="text"
                      value={this.state.name}
                      onChange={e => this.handleChange('email', e.target.value)}
                      placeholder="Email"
                      id="email"
                    />{' '}
                    <label className="Input-label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="passwordInput22">
                    <input
                      className="Input-text"
                      type="password"
                      value={this.state.password}
                      onChange={e =>
                        this.handleChange('password', e.target.value)
                      }
                      placeholder="Password"
                      id="password"
                    />
                    <label className="Input-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="divy">
                    <Link className="a" to="/dashboard">
                      <button
                        onClick={this.login}
                        className="button2"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </span>
              <Link className="link" to="/register">
                <h1 className="redirect2">
                  *Not a part of the fam? Click here to change that!*
                </h1>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(null, { updateUserInfo })(Login)
