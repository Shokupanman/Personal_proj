import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Register.scss'
import { updateUserInfo } from '../../ducks/reducer'
import { connect } from 'react-redux'
import logo from '../../logo.png'
class Register extends Component {
  state = {
    email: '',
    user_name: '',
    password1: '',
    password2: ''
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { password1: password, user_name, email } = this.state
      axios
        .post('/auth/register', { user_name, email, password })
        .then(res => {
          console.log(res.data)
          this.props.updateUserInfo(res.data.user)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      console.log("Passwords don't match")
    }
  }

  render() {
    return (
      <div className="regidiv">
        <div>
          <img className="logo" src={logo} />
        </div>
        <div className="register">
          <div className="inputbk">
            <span className="input">
              <div className="emailInput">
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
              <div className="userNameInput">
                <input
                  className="Input-text"
                  type="text"
                  value={this.state.user_name}
                  onChange={e => this.handleChange('user_name', e.target.value)}
                  placeholder="User Name"
                  id="user"
                />{' '}
                <label className="Input-label" htmlFor="user">
                  User Name
                </label>
              </div>
              <div className="passwordInput">
                <input
                  className="Input-text"
                  type="password"
                  value={this.state.password1}
                  onChange={e => this.handleChange('password1', e.target.value)}
                  placeholder="Password"
                  id="password"
                />
                <label className="Input-label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="passwordInput2">
                <input
                  className="Input-text"
                  id="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={e => this.handleChange('password2', e.target.value)}
                  placeholder="One more time"
                />
                <label className="Input-label" htmlFor="password2">
                  {' '}
                  One More Time
                </label>
              </div>
              <span></span>
            </span>
            <Link to="/dashboard">
              <div className="button_cont" align="center">
                <button
                  onClick={this.register}
                  className="button"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Register
                </button>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/" className="link">
          <h3 className="redirect">Already a part of the fam? Login here!!!</h3>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}
const mapDispatchToProps = {
  updateUserInfo
}

export default connect(null, { mapStateToProps, mapDispatchToProps })(Register)