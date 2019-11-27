import React from 'react'
import './Company.scss'

export default function Company(props) {
  console.log(props)
  const { title, reqs, avg_pay, description, img, cat } = props.company
  return (
    <div>
      <section className="bigboi">
        <div className="taskdeal">TASK DEAL</div>
        <div className="headi">
          <div className="catT">
            <h1 className="title">{title}</h1>
            <h3 className="text">Catogory: {cat}</h3>
          </div>
          <section className="lander">
            <img src={img} alt="" className="pics" />
          </section>
        </div>
      </section>
      <section className="description">
        <h3 className="text">Average Pay: {avg_pay}</h3>
        <h3 className="text">Job Descriptions: {description}</h3>
        <h3 className="text">Requirements: {reqs}</h3>
      </section>
    </div>
  )
}
