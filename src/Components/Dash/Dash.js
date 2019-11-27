import React, { Component } from 'react'
import './Dash.scss'
import QuotesDB from './QuotesDB'

const quotes = [
  {
    quote: 'Your attitude determines your direction.',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'Work hard, be brave',
    author: 'Casey Niestat'
  },
  {
    quote: 'Progress, not perfection.',
    author: 'Unknown'
  },
  {
    quote:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: "We must not allow other people's limited perceptions to define us.",
    author: 'Virginia Satir'
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt'
  },
  {
    quote: 'This above all: to thine own self be true.',
    author: 'William Shakespeare'
  },
  {
    quote: 'Strive no to be a success, but rather to be of value',
    author: 'Albert Einstein'
  },
  {
    quote: 'Either you run the day, or the day runs you.',
    author: 'Jim Rohn'
  },
  {
    quote: 'Everything has beauty, but not everybody can see',
    author: 'Confucius'
  },
  {
    quote:
      'The only thing worse than being blind is having sight but no vision.',
    author: 'Helen Keller'
  },
  {
    quote: 'Happiness is an inside job',
    author: 'Unkown'
  },
  {
    quote: "If you aren't going all the way, why go at all?",
    author: 'Joe Namath'
  },
  {
    quote: 'Always do your best. What you plant now, you will harvest later.',
    author: 'Og Mandino'
  },
  {
    quote: "Don't wait for opportunity. CREATE IT",
    author: 'Unknown'
  },
  {
    quote:
      "Life is not about waiting for the storm to pass. It's about learning to dance in the rain.",
    author: 'Samatva Yoga'
  },
  {
    quote: "If you don't bend, you break.",
    author: 'Anonymous'
  },
  {
    quote: 'JUST BREATHE!!',
    author: 'Everyones Mom'
  },
  {
    quote: 'The best preparation for tomorrow is doin your best today.',
    author: 'H. Jackson Brown, Jr.'
  },
  {
    quote: 'The undertaking of a new action brings new strength',
    author: 'Richard L. Evans'
  },
  {
    quote: 'We know what we are, but know not what we may be.',
    author: 'William Shakespeare'
  },
  {
    quote:
      'What lies behind you and what lies in front of you pales in comparison to what lies inside of you',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'Your attitude determines your direction.',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'Do what you have to do until you can do what you want to do.',
    author: 'Oprah Winfrey'
  },
  {
    quote: 'Being alone has a power that very few people can handle.',
    author: 'Steven Aitchison'
  },
  {
    quote: "My goal is to build a life I don't need a vacation from.",
    author: 'Rob Hill Sr'
  },
  { quote: 'Always do what you are afraid to do.', author: 'Unknown' },
  {
    quote: 'Be somebody who makes everybody feel like a somebody.',
    author: 'Unknown'
  },
  {
    quote: 'Make it happen. Shock everyone.',
    author: 'Unknown'
  },
  {
    quote: "Three months from now, you'll thank yourself.",
    author: 'Unknown'
  },
  {
    quote: 'Travel far enough to meet yourself.',
    author: 'Unknown'
  },
  {
    quote: 'Progress, not perfection.',
    author: 'Unknown'
  },
  {
    quote: 'Just keep swimming .',
    author: 'Dory, Find Nemo'
  },
  {
    quote: 'Remember why you started.',
    author: 'Unknown'
  }
]

const colors = [
  '#0889A6',
  '#BF9411',
  '#DE3C4B',
  '#6FC9CE',
  '#0D688C',
  '#1FA675',
  '#A77CC9',
  '#F27C38',
  '#753742'
]
export default class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'Your attitude determines your direction.',
      author: 'Ralph Waldo Emerson',
      color: '#0889A6'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * 33) + 1
    const randomColorNumber = Math.floor(Math.random() * 8) + 1
    this.setState({
      quote: quotes[randomNumber].quote,
      author: quotes[randomNumber].author,
      color: colors[randomColorNumber]
    })
  }

  render() {
    return (
      <div className="dashDiv">
        <section className="dashboard">
          <section className="quotes">
            <div
              id="main"
              style={{
                backgroundColor: this.state.color,
                transition: 'background-color 1s'
              }}
            >
              <div id="quote-box">
                <div id="text-box">
                  <p
                    id="text"
                    style={{
                      color: this.state.color,
                      transition: 'background-color 1s'
                    }}
                  >
                    {this.state.quote}
                  </p>
                </div>
                <p
                  id="author"
                  style={{
                    color: this.state.color,
                    transition: 'background-color 1s'
                  }}
                >
                  -{this.state.author}
                </p>
                <div id="buttons">
                  <div>
                    <button
                      id="button"
                      onClick={this.handleClick}
                      style={{
                        backgroundColor: this.state.color,
                        transition: 'background-color 1s',
                        color: 'white'
                      }}
                    >
                      Next quote
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
          <section className="bottomhalf">
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
                Dream Catchers is here to help you PURSUE and DISCOVER your
                dream! Explore some of the top schools and companies for each
                subject!
              </p>
            </div>
            <section className="link2">
              <div className="coffeeLink">
                <a className="coffeeBut" href="/coffee">
                  <i className="fas fa-mug-hot"></i>
                </a>
              </div>
            </section>
          </section>
        </section>
      </div>
    )
  }
}
