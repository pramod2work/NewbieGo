export const mapErrorData = (error) => {
  let errorData

  try {
    errorData = error.response.data || error.response.header || {}
  } catch (err) {
    errorData = {}
  }

  return errorData
}

/* eslint-disable no-console */
export const handleCrashError = ({
  componentName,
  componentData,
  error,
  info,
}) => {
  console.error(`Component '${componentName}' CRASHED`, componentData)
  console.error('Error', error)
  console.debug('info', info)
}
/* eslint-enable no-console */
