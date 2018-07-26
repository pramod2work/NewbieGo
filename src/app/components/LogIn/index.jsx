import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'

import { logininitrequest } from '../../reducers/logInInitReducer'
import LogIn from './LogIn'

export const mapStateToProps = ({
  logInInitData = {},
  form,
}) => ({
  logInInitData,
  formValues: getFormValues('UpdatePreferredNameForm')({ form }),
})

export const mapDispatchToProps = dispatch => (
  {
    loginInit: () => {
      dispatch(logininitrequest())
    },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
