import axios from 'axios'
import { v1 as uuidTimeBased } from 'uuid'

import apiPaths from '../../../config/helpers/api-paths'
import apiUris from '../../../config/helpers/api-uris'
import { getQeryStringByName } from './global'
import styleVars from '../style/global'
import { isSTEnvironment } from '../utils/utils'
import { environment } from '../../environments'

export const apiUriConfig = {
  ...apiUris,
  apiRoot: apiPaths.apiRoot,
  apiContext: apiPaths.apiContext,
}

export const getBaseName = () => {
  let baseName = '/newbie-go'
  if (isSTEnvironment()) {
    baseName = `${apiPaths.stEnvContext}/`
  } else if (environment.ci) {
    baseName = `${apiPaths.ciEnvContext}/`
  }

  return baseName
}

const axiosInstance = axios.create({
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'ANZ-Application-ID': styleVars.app.isMobileApp ? 'au-anzapp' : 'au-ib',
    'ANZ-Application-Version': '1.0',
    PersonID: getQeryStringByName('PersonID'),
    'Client-IP': '00.00.00.000', // Todo: to be set by underlying system
    'ANZ-Device-ID': '0.0.0.0', // Todo: Set Device ID for mobile APP and IB
    'ANZ-Channel-ID': styleVars.app.isMobileApp ? 'mobile-idhub' : 'web-idhub',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, x-requested-with, x-requested-by, Content-Type',
    'Access-Control-Max-Age': 86400,
  },
})


/* Interceptor of all AJAX calls */
axiosInstance.interceptors.request.use((config) => {
  const updatedConfig = {
    ...config,
    data: config.data || {},
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
      // Host: 'daida09l.unix.anz:13443',
    },
  }
  // console.log(updatedConfig)
  return updatedConfig
})
/* END OF Interceptor */

export function getApiConfig() {
  return axiosInstance
}

export function getUUIDTimeBased() {
  return uuidTimeBased()
}
