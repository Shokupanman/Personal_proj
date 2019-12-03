import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Header.scss'
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faListAlt,
  faBuilding,
  faBars
} from '@fortawesome/free-solid-svg-icons'

const schoolsIcon = <FontAwesomeIcon icon={faGraduationCap} />
const listIcon = <FontAwesomeIcon icon={faListAlt} />
const companyIcon = <FontAwesomeIcon icon={faBuilding} />
const bars = <FontAwesomeIcon icon={faBars} />
class Header extends Component {
  constructor() {
    super()

    this.state = {
      user_name: ''
    }
  }
  logout = () => {
    axios.delete('/auth/logout').then(res => {
      Swal.fire('See ya!')
      this.props.updateUserInfo({
        email: '',
        user_name: '',
        dreamer_id: ''
      })
    })
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('/api/user').then(res => {
      this.setState({
        user_name: res.data.user_name
      })
    })
    // this.setState({
    //   user_name: this.props.user_name
    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user_name !== prevProps.user_name) {
      console.log(this.props.user_name)
      axios.get('/api/user').then(res => {
        this.setState({
          user_name: res.data.user_name
        })
      })
    }
  }

  // navBar() {
  //   this.document.getElementById('myDropdown').classList.toggle('show')
  // }

  render() {
    // window.onClick = function(event) {
    //   if (!event.target.matches('.dropbtn')) {
    //     let dropdowns = document.getElementsByClassName('dropdown-content')
    //     let i
    //     for (i = 0; i < dropdowns.length; i++) {
    //       let openDropdowns = dropdowns[i]
    //       if (openDropdowns.classList.contains('show')) {
    //         openDropdowns.classList.remove('show')
    //       }
    //     }
    //   }
    // }

    return (
      <div>
        <section className="header">
          <div className="userInfo">
            <h1 className="welcome">Welcome {this.state.user_name}!</h1>
            <Link to="/">
              <button className="logoutBut" onClick={this.logout}>
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
            {/* <div className="dropdown">
              <button onClick={this.navBar()} className="dropbtn">
                {bars}
              </button>
              <div id="myDropdown" className="dropdown-content">
                <Link className="navi" to="/schools">
                  {schoolsIcon}Schools
                </Link>
                <Link className="navi" to="/companies">
                  {companyIcon}Careers
                </Link>
                <Link className="navi" to="/todo">
                  {listIcon}My List!
                </Link>
              </div>
            </div> */}
            <Link className="navi" to="/schools">
              {schoolsIcon}Schools
            </Link>
            <Link className="navi" to="/companies">
              {companyIcon}Careers
            </Link>
            <Link className="navi" to="/todo">
              {listIcon}My List!
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Header)
