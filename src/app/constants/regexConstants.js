// Digits
export const NOT_DIGITS = /[^\d]/g
export const DIGITS_ONLY = /[\d]/g
export const DIGIT_AND_HYPHEN = /[^0-9\-']/
export const SIX_DIGITS = /^[0-9]{6}$/

export const AU_MOBILE_PHONE_NUMBER = /04\d{8}$/
export const AU_MOBILE_FORMAT = /^(\d{4})(\d{3})(\d{3})$/
export const AU_MOBILE_INT_DIAL = /^\+?61/
// Alphanumeric
export const ALPHANUMERIC = /^[0-9a-zA-Z]*$/
export const NOT_ALPHA_DIGITS = /[^a-zA-Z0-9]/ig
export const ALPHA_ONLY = /[a-zA-Z]/g
export const PREFERRED_NAME_SET = /[^a-zA-Z'-\s]/g
export const PREFERRED_NAME_INVALID_START = /^(['-\s])/g
export const SAME_DIGIT_3_OR_MORE_TIME = /([0-9])(\1)(\1)+/

// Sepcial Characters
export const ALL_WHITE_SPACES = /(\s+)/g

// Email
export const ANZ_EMAIL_REGEX = /^[a-zA-Z0-9._+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/
export const ANZ_EMAIL_SET = /[^a-zA-Z0-9.@_+-]/g
