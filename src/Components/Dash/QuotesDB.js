import React from 'react'
import './styles.scss'
import Dash from './Dash'

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

const QuotesDB = () => {
  return (
    <div>
      <Dash quotes={quotes} />
    </div>
  )
}

export default QuotesDB
