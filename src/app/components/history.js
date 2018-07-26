import createHistory from 'history/createBrowserHistory'

import { stateManagerMap, stateMapUrl } from '../utils/stateMapping'
import { getBaseName } from '../utils/apiConfig'

export const history = createHistory({
  basename: getBaseName(),
  getUserConfirmation(message, callback) {
    // callback(true) to continue the transiton, or
    // callback(false) to abort it.
    if (message !== 'APPCHANGE') {
      callback(false)
      // eslint-disable-next-line no-use-before-define
      window.setTimeout(() => { appHistoryBack() }, 100)
    } else {
      callback(true)
    }
  },
})


let isAppChange = false
const setAppChange = () => {
  isAppChange = true
}

const resetAppChange = () => {
  isAppChange = false
}

const isAppChangeSet = () => isAppChange

// Listen for changes to the current location.
/* history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location, history)
}) */

history.block(() => {
  // The location and action arguments indicate the location
  // we're transitioning to and how we're getting there.

  // A common use case is to prevent the user from leaving the
  // page if there's a form they haven't submitted yet.

  if (isAppChangeSet()) {
    resetAppChange()
    return 'APPCHANGE'
  }

  return 'BLOCK'
})

export const gotoPage = (pathDetails) => {
  setAppChange()
  history.push(pathDetails)
}

export const goBack = () => {
  setAppChange()
  history.goBack()
}


export const appHistoryBack = () => {
  const currentPage = history.location.pathname

  if ((stateManagerMap.stepBackList).indexOf(currentPage) >= 0) {
    goBack()
  } else {
    gotoPage(stateMapUrl.logIn)
  }
}
