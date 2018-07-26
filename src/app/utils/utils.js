import _ from 'lodash'

import styleVars from '../style/global'
import { openExternalLink } from './mobileConsumptionMethods'


export const openNewTab = (link) => {
  if (styleVars.app.isMobileApp) {
    openExternalLink(link)
  } else {
    window.open(link, '_blank')
  }
}

export const isAreaCodeNA = areaCode => !areaCode || areaCode === 'N/A'

export const isPersonTypeCRN = personType => personType && personType.toUpperCase() === 'CRN'

export const isAustraliaCode = countryCode => !countryCode || countryCode === '61' || countryCode === '+61'

export const isNZCode = countryCode => !countryCode || countryCode === '64'

export const getDataByType = (dataList, type) => {
  if (dataList && dataList.length && type) {
    const dataObj = _.filter(
      dataList,
      obj => obj.type && obj.type.toUpperCase() === type.toUpperCase(),
    )
    return dataObj[0]
  }
  return null
}

/* Object to hold transaction IDs related to Challenge framework */
let transactionId = ''
export const setTransactionID = (transactionIdParam) => {
  transactionId = transactionIdParam || ''
}
export const getTransactionID = () => transactionId
export const deleteTransactionID = () => {
  transactionId = ''
}

let actionType = ''
export const setActionType = (requestParam = {}) => {
  const { attributeAction } = requestParam
  actionType = attributeAction || ''
}
export const getActionType = () => actionType
export const deleteActionType = () => {
  actionType = ''
}
/* End of transaction IDs */


export const isSTEnvironment = () => window.location.hostname.indexOf('cspappst2') > -1

export const getAge = (dateString) => {
  const today = new Date()
  const birthDate = new Date(dateString || '')
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1
  }
  return age
}

/*
Exception handling of no session storage
return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
  */

export const storageAvailable = (type) => {
  const storage = window[type]
  try {
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}

let sessionStorage = {}
const storageType = 'sessionStorage'
export const setSessionStorage = ({ key, value }) => {
  if (storageAvailable(storageType)) {
    window[storageType].setItem(key, value)
  }

  sessionStorage[key] = value
}

export const getSessionStorage = (key) => {
  let returnValue
  if (sessionStorage[key]) {
    returnValue = sessionStorage[key]
  } else if (storageAvailable(storageType)) {
    returnValue = window[storageType].getItem(key)
  }

  return returnValue
}

export const clearSessionStorage = () => {
  sessionStorage = {}
  if (storageAvailable(storageType)) {
    window[storageType].clear()
  }
}

export const deleteSessionItem = (key) => {
  delete sessionStorage[key]
  if (storageAvailable(storageType)) {
    window[storageType].removeItem(key)
  }
}
