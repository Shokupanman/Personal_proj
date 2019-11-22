import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Header.css'
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'

const Header = props => {
  const logout = () => {
    axios.delete('/auth/logout').then(res => {
      Swal.fire('See ya!')
      props.updateUserInfo({
        email: '',
        user_name: '',
        dreamer_id: ''
      })
    })
  }

  return (
    <div>
      <section className="header">
        <div className="userInfo">
          <h3>{props.user_name}</h3>
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
        </div>
        <div className="logoDiv">
          <Link to="/dashboard">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div className="nav">
          <h1>NAVBAR</h1>
        </div>
      </section>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Header)
