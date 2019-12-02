import React from 'react'
import './School.scss'

import { toDo } from '../../ducks/reducer'
import { connect } from 'react-redux'

export default function Company(props) {
  console.log(props)
  const { name, city, in_state, out_of_state, img, cat } = props.school
  return (
    <div>
      <section className="bigboi2">
        <section className="lander2">
          <img src={img} alt="" className="pics2" />
        </section>
        <div className="headi2">
          <div className="catT2">
            <h1 className="title2">{name}</h1>
            <h3 className="text2">Catogory: {cat}</h3>
          </div>
          <div className="taskdeal2">
            <div className="task1">Apply to {name}!</div>
            <div className="task2">Contact {name}'s finacial aid office</div>
            <div className="task3">
              Check available housing options in {city}
            </div>
            <div className="task4">
              Get in contact with different alumni circles from {name}
            </div>
            <div className="task5">
              Research different extra curricular groups at {name}
            </div>
          </div>
        </div>
      </section>
      <section className="description2">
        <h3 className="text2">City: {city}</h3>
        <h3 className="text2"> Instate: {in_state}</h3>
        <h3 className="text2">Out of State: {out_of_state}</h3>
      </section>
      <hr />>
    </div>
  )
}
