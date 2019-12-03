import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    //console.log(this.props.task.list_id)
    const {
      task: { list_id, list_content },
      deleteTask
    } = this.props
    return (
      <div>
        <div>
          <h1>*{list_content}</h1>
          <button onClick={() => deleteTask(list_id)}>X</button>
        </div>
      </div>
    )
  }
}
