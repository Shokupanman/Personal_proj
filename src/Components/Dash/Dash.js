import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dash.css'
export default class Dash extends Component {
  render() {
    return (
      <div className="dashDiv">
        <section className="quotes">
          <div>
            <h1>QUOTES</h1>
          </div>
        </section>
        <section className="dashboard">
          <section className="link1">
            <div className="podcastLink">
              <h1>
                <a href="https://www.npr.org/podcasts/510313/how-i-built-this">
                  <button className="pBut">GREAT PODCAST</button>
                </a>
              </h1>
            </div>
          </section>
          <div className="explanation">
            <p>
              This site is to here to help you pursue your dream! I beleive that
              there are no limits to our possibilites if we have a plan! OTHER
              CRAP
            </p>
          </div>
          <section className="link2">
            <div className="coffeeLink">
              <Link to="/coffee">
                <button className="coffeeBut">
                  <i class="fas fa-mug-hot"></i>
                </button>
              </Link>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
