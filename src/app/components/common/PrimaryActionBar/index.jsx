import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '../Spinner'
import {
  ButtonPrimaryAndroid,
  GridRow,
  GridColumn,
} from '../../../style/styles'
import styleVars from '../../../style/global'

const PrimaryActionBar = ({
  handleClick,
  isSubmitting,
  isDisabled,
  paddingTop,
  paddingBottom,
  actionRef,
  actionButtonLabel,
  actionType,
}) => (
  <GridRow style={{ textAlign: 'center' }} paddingTop={paddingTop || ''} paddingBottom={paddingBottom || ''} noBorder>
    <GridColumn xs={12} paddingLeft="0px" paddingRight="0px">
      <ButtonPrimaryAndroid type={actionType} data-test-id="done-btn" onClick={handleClick} isSubmitting={isSubmitting ? 'Y' : 'N'} isDisabled={isDisabled ? 'Y' : 'N'} disabled={isDisabled || isSubmitting} innerRef={actionRef}>
        {isSubmitting ?
          <Spinner isAndroid color={styleVars.color.white} size={26} /> :
          actionButtonLabel}
      </ButtonPrimaryAndroid>
    </GridColumn>
  </GridRow>
)

PrimaryActionBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  isDisabled: PropTypes.bool,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  actionRef: PropTypes.func,
  actionButtonLabel: PropTypes.string,
  actionType: PropTypes.oneOf(['submit', 'button']),
}

PrimaryActionBar.defaultProps = {
  isSubmitting: false,
  isDisabled: false,
  paddingTop: '',
  paddingBottom: '',
  actionRef: () => null,
  actionButtonLabel: 'Done',
  actionType: 'submit',
}

export default PrimaryActionBar
