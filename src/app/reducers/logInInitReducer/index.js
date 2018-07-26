import { createActions, handleActions, combineActions } from 'redux-actions'

// Actions
export const LOGIN_INIT_REQUEST = 'LOGININITREQUEST'
export const LOGIN_INIT_SUCCESS = 'LOGININITSUCCESS'
export const LOGIN_INIT_FAILURE = 'LOGININITFAILURE'
export const LOGIN_INIT_RESET = 'LOGININITRESET'

const initialState = {
  data: null,
  error: false,
  inProgress: false,
}

export const {
  logininitrequest,
  logininitsuccess,
  logininitfailure,
  logininitreset,
} = createActions({
  [LOGIN_INIT_REQUEST]: data => ({ inProgress: true, requestParam: data }),
  [LOGIN_INIT_SUCCESS]: data => ({ data }),
  [LOGIN_INIT_FAILURE]: error => ({ error }),
  [LOGIN_INIT_RESET]: () => initialState,
})

const loginInitReducer = handleActions({
  [combineActions(
    logininitrequest,
    logininitsuccess,
    logininitfailure,
    logininitreset,
  )](state, {
    payload: { inProgress, data, error },
  }) {
    return {
      ...state, inProgress, data, error,
    }
  },
}, initialState)

export default loginInitReducer
