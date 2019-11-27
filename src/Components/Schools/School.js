import React from 'react'
import '../Companies/Company.scss'

export default function Company(props) {
  console.log(props)
  const { name, city, in_state, out_of_state, img, cat } = props.school
  return (
    <div>
      <section className="bigboi">
        <div className="taskdeal">TASK DEAL</div>
        <div className="headi">
          <div className="catT">
            <h1 className="title">{name}</h1>
            <h3 className="text">Catogory: {cat}</h3>
          </div>
          <section className="lander">
            <img src={img} alt="" className="pics" />
          </section>
        </div>
      </section>
      <section className="description">
        <h3 className="text">City: {city}</h3>
        <h3 className="text"> Instate: {in_state}</h3>
        <h3 className="text">Out of State: {out_of_state}</h3>
      </section>
    </div>
  )
}
