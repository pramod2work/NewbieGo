import {
  AU_MOBILE_INT_DIAL,
  AU_MOBILE_FORMAT,
  NOT_DIGITS,
  AU_MOBILE_PHONE_NUMBER,
  PREFERRED_NAME_SET,
  ALL_WHITE_SPACES,
  PREFERRED_NAME_INVALID_START,
  ANZ_EMAIL_REGEX,
  ANZ_EMAIL_SET,
} from '../constants/regexConstants'

export const formatMobile = (mobileNumber) => {
  const regexMobile = new RegExp(AU_MOBILE_INT_DIAL)
  if (mobileNumber && regexMobile.test(mobileNumber)) {
    return mobileNumber
      .replace(AU_MOBILE_INT_DIAL, 0)
      .replace(AU_MOBILE_FORMAT, '$1 $2 $3')
  }

  return mobileNumber
}

export const formatAULocalDial = (mobileNumber) => {
  const regexMobile = new RegExp(AU_MOBILE_PHONE_NUMBER)
  if (mobileNumber && regexMobile.test(mobileNumber)) {
    return mobileNumber
      .replace(AU_MOBILE_FORMAT, '$1 $2 $3')
  }

  return mobileNumber
}

export const formatMobileForCountryCode = (mobileNumber, countryCode) => {
  if (mobileNumber && !mobileNumber.indexOf('***') > -1 && (countryCode === '61' || countryCode === '+61')) {
    return mobileNumber.replace(AU_MOBILE_FORMAT, '$1 $2 $3')
  }

  return mobileNumber
}

export const formatNumber = phoneNumber => phoneNumber && phoneNumber.replace(NOT_DIGITS, '')

export const formatPreferredName = preferredName => preferredName &&
  preferredName.replace(PREFERRED_NAME_SET, '').replace(PREFERRED_NAME_INVALID_START, '').replace(ALL_WHITE_SPACES, ' ')

export const isValidEmailFormat = email => email && email.match(ANZ_EMAIL_REGEX)

export const formatEmail = email => email && email.replace(ANZ_EMAIL_SET, '')
