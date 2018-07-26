import { all, takeLatest } from 'redux-saga/effects'

import { logInInit } from './logInInit'
import { LOGIN_INIT_REQUEST } from '../reducers/logInInitReducer'

// single entry point to start all the sagas, our root saga, a generator function
export function* rootSaga() {
  yield all([
    takeLatest(LOGIN_INIT_REQUEST, logInInit),
  ])
}

export default rootSaga
