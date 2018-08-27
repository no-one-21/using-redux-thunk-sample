import users from './users.reducers'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
 
  users,
  form: formReducer
})

export default rootReducer