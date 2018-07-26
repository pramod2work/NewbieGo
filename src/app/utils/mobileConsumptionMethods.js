import styleVars from '../style/global'

export const triggerIOSEvent = (eventMsg) => {
  try {
    window.webkit.messageHandlers.hubMessageHandler.postMessage(eventMsg)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

export const triggerAndroidEvent = (eventMsg) => {
  try {
    window.Android.hubMessageHandler(JSON.stringify(eventMsg))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

export const triggerMobileEvent = (eventMsg) => {
  if (!styleVars.app.isMobileApp) {
    return
  }
  // eslint-disable-next-line no-console
  console.debug('eventMsg', eventMsg)
  if (styleVars.app.isIOS) {
    triggerIOSEvent(eventMsg)
  } else {
    triggerAndroidEvent(eventMsg)
  }
}

export const mobileEventMap = {
  alert: 'alert',
  hideBack: 'hideBackButton',
  navigateBack: 'navigateBack',
  backAction: 'backButtonCallBackEvent',
  swipeAnimation: 'swipeAnimation',
  pageLoad: 'pageLoad',
  externalLink: 'externalLink',
  viewRedirect: 'viewRedirect',
  navigationChange: 'navigationChange',
  displayPageHeader: 'displayPageHeader',
  internalLink: 'internalLink',
  enableBiometrics: 'enableBiometrics',
  hubHomePage: 'hubHomePage',
  removeNavigationHistory: 'removeFromNavigationHistory',
}

export const triggerMobileAlert = (title, message, buttons) => {
  const alertEventParams = {
    event: mobileEventMap.alert,
    alert: {
      title,
      message,
      buttons,
      numberOfButtons: buttons.length,
    },
  }
  triggerMobileEvent(alertEventParams)
}

export const pageLoaded = () => {
  triggerMobileEvent({
    event: mobileEventMap.pageLoad,
    isPageLoaded: true,
  })
}

export const navigateBack = () => {
  triggerMobileEvent({
    event: mobileEventMap.navigateBack,
    isNavigateBack: true,
  })
}

export const openExternalLink = (link) => {
  triggerMobileEvent({
    event: mobileEventMap.externalLink,
    externalLinkUrl: link,
  })
}

export const openInternallLink = (link) => {
  triggerMobileEvent({
    event: mobileEventMap.internalLink,
    internalLink: link,
  })
}

export const updateSwipeAnimation = (disable) => {
  triggerMobileEvent({
    event: mobileEventMap.swipeAnimation,
    isSwipeDisabled: disable,
  })
}

export const disableSwipeAnimation = () => {
  updateSwipeAnimation(true)
}

export const enableSwipeAnimation = () => {
  updateSwipeAnimation(false)
}

export const hideMobileBackButton = () => {
  triggerMobileEvent({
    event: mobileEventMap.hideBack,
    backButtonShouldHide: true,
  })
}

export const pageRedirecton = () => {
  triggerMobileEvent({
    event: mobileEventMap.viewRedirect,
    isViewRedirected: true,
  })
}

export const stateChangeComplete = () => {
  triggerMobileEvent({
    event: mobileEventMap.navigationChange,
    isNavigationComplete: true,
  })
}

export const displayPageHeader = () => {
  triggerMobileEvent({
    event: mobileEventMap.displayPageHeader,
    showPageHeader: true,
  })
}

export const enableBiometrics = (inputObj) => {
  triggerMobileEvent({
    event: mobileEventMap.enableBiometrics,
    enableBiometrics: {
      ...inputObj,
    },
  })
}

export const hubHomePage = (isHubHome) => {
  triggerMobileEvent({
    event: mobileEventMap.hubHomePage,
    isHubHomePage: !!isHubHome,
  })
}

export const silentPopPreviousScreen = () => {
  triggerMobileEvent({
    event: mobileEventMap.removeNavigationHistory,
    pageIndex: 1,
  })
}
