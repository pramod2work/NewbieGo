import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

import styleVars from '../../../style/global'

const Spinner = ({
  strokeWidth,
  size,
  color,
}) => (
  <CircularProgress
    color={color}
    size={size}
    thickness={strokeWidth}
  />
)

Spinner.defaultProps = {
  strokeWidth: 3,
  size: 24,
  color: styleVars.color.oceanBlue,
}

Spinner.propTypes = {
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
}
export default Spinner
