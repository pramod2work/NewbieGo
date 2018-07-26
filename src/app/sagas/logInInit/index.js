import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { mapErrorData } from '../../utils/errorMapping'
import { logininitsuccess, logininitfailure } from '../../reducers/logInInitReducer'

export const logInAction = (requestParam) => {
  const logInService = ApiConfig.getApiConfig()
  return logInService.post(
    `${ApiConfig.apiUriConfig.apiRoot}${ApiConfig.apiUriConfig.apiContext}${ApiConfig.apiUriConfig.logIn}`,
    { ...requestParam },
    {
      headers: {
        RequestID: ApiConfig.getUUIDTimeBased(),
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  )
}

export function* logInInit(action) {
  try {
    const response = yield call(logInAction, action.payload.requestParam)
    yield put(logininitsuccess(response.data))
  } catch (error) {
    yield put(logininitfailure(mapErrorData(error)))
  }
}
