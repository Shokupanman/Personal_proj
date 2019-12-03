const initialState = {
  email: '',
  user_name: '',
  dreamer_id: ''
}

// const toDoState = {
//   task1: '',
//   task2: '',
//   task3: '',
//   task4: '',
//   task5: ''
// }

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
export const TO_DO_LIST = 'TO_DO_LIST'

export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  }
}

export function toDo(task1, task2, task3, task4, task5) {
  return {
    type: TO_DO_LIST,
    payload: {
      task1,
      task2,
      task3,
      task4,
      task5
    }
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload }
    default:
      return state
    case TO_DO_LIST:
      return { ...state, ...action.payload }
  }
}
