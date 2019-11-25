import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Header.scss'
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
          <h1 className="welcome">Welcome {props.user_name} !</h1>
          <Link to="/">
            <button className="logoutBut" onClick={logout}>
              Logout
            </button>
          </Link>
        </div>
        <div className="logoDiv">
          <Link to="/dashboard">
            <img className="logo" alt="" src={logo} />
          </Link>
        </div>
        <div className="nav">
          <Link className="navi" to="/schools">
            <i className="fas fa-graduation-cap"></i>Schools
          </Link>
          <Link className="navi" to="/companies">
            <i className="fas fa-building"></i>Companies
          </Link>
          <Link className="navi" to="/todo">
            <i className="fas fa-list-alt"></i>My List!
          </Link>
        </div>
      </section>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Header)
