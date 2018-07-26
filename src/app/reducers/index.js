import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import logInInitData from './logInInitReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  logInInitData,
})

export default rootReducer
