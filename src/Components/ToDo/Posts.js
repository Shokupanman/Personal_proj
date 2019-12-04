import React, { Component } from 'react'
import './ToDo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const pen = <FontAwesomeIcon icon={faPen} />
const check = <FontAwesomeIcon icon={faCheckSquare} />
export default class Posts extends Component {
  render() {
    //console.log(this.props.task.list_id)
    const {
      task: { list_id, list_content },
      tasks,
      edit,
      deleteTask,
      toggleEdit,
      editTasks,
      editTask,
      handleChange
    } = this.props

    return (
      <div>
        <div className="listi">
          <h1 className="list">{list_content}</h1>
          <div>
            <div>
              <p key={list_id}></p>
              {edit === true ? (
                <input
                  className="listI"
                  value={editTasks}
                  type="text"
                  onChange={event => handleChange(event)}
                />
              ) : null}
            </div>
            <button className="listB" onClick={() => deleteTask(list_id)}>
              X
            </button>
            {edit ? (
              <button
                className="listB"
                onClick={() => editTask(list_id, editTasks)}
              >
                {check}
              </button>
            ) : (
              <button className="listB" onClick={() => toggleEdit(list_id)}>
                {pen}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
