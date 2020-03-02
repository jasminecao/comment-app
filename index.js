import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

const defaultState = [
  {
    name: 'name',
    post: 'hellooo'
  }
]

const reducer = (state = defaultState, action) => {
  const stateCopy = state.slice()
  switch (action.type) {
    case 'ADD_POST':
      const {entry} = {
        name: action.name,
        post: action.post
      }
      stateCopy.push(entry)
      break;
    default:
      return state
  }
  return stateCopy
}

const store = createStore(reducer)

ReactDOM.render(
  // <Provider store={store}>
      <App/>,
  // </Provider>,
  document.getElementById('react-root')
)