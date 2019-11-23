import React, { Component } from 'react'
import './Button.scss'

export default class Button extends Component {
  clickSet() {
    const circularnav = document.getElementsByClassName('ss-icon')[0]
    circularnav.classList.toggle('closed')
    circularnav.classList.toggle('clicked')
    if (circularnav.classList.contains('closed')) {
      // freshly closed button
      var pseudoBefore = window.getComputedStyle(
        document.querySelector('.ss-icon'),
        ':before'
      ).animation
    }

    circularnav.addEventListener('click', this.clickSet, false)

    circularnav.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        this.clickSet()
      }
    })
  }
  render() {
    return (
      <div>
        <nav className="ss-icon closed" tabindex="0">
          <span id="center-bar"></span>
          <a href="/">Twitter</a>
          <a href="/">Facebook</a>
          <a href="/">Pinterest</a>
          <a href="/">Google+</a>
          <a href="/">Ello</a>
        </nav>
      </div>
    )
  }
}
