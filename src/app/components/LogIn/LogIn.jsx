import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import enhancer from './enhancer'
import PrimaryActionBar from '../common/PrimaryActionBar'
import { Heading, HeadingSpan } from '../../style/content.styles'
import {
  SectionContainer,
  TransitionStateFromRight,
  ScaleSectionContainer,
  Grid,
  GridColHeader,
  InputWrapper,
} from '../../style/styles'
import styleVars from '../../style/global'
import { gotoPage } from '../history'

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    floatingLabelFocusStyle={{ color: styleVars.color.oceanBlue }}
    underlineFocusStyle={{ borderColor: styleVars.color.oceanBlue }}
    autoComplete="off"
    {...input}
    {...custom}
  />
)

export class LoginUpdate extends Component {
  render() {
    const {
      logInData,
      handleSubmit,
    } = this.props
    const { isSubmitting } = this.state

    return (
      <TransitionStateFromRight>
        <SectionContainer noBorder>
          <Grid>
            <GridColHeader>
              <Heading data-test-id="page-heading">
                <HeadingSpan>
                  Newbie GO!!
                </HeadingSpan>
              </Heading>
            </GridColHeader>

            <ScaleSectionContainer>
              <p> Welcome Newbie GO!!</p>


              <form onSubmit={handleSubmit(this.submitForm)}>
                <InputWrapper>
                  <Field
                    name="verificationCode"
                    component={renderTextField}
                    label="Enter Verification Code"
                  />
                </InputWrapper>
              </form>

              <PrimaryActionBar
                actionButtonLabel="Start Onboarding"
                handleClick={this.submitForm}
                isSubmitting={isSubmitting}
                paddingTop="24px"
                paddingBottom="0px"
                actionType="submit"
              />
            </ScaleSectionContainer>

          </Grid>
        </SectionContainer>
      </TransitionStateFromRight>
    )
  }
}

LoginUpdate.defaultProps = {
  formValues: {},
}

LoginUpdate.propTypes = {
  logInInitData: PropTypes.shape({
    inProgress: PropTypes.bool,
  }).isRequired,
  formValues: PropTypes.shape({
    userName: PropTypes.string,
    password: PropTypes.string,
  }),
}

export const LoginUpdateWithEnhancer = enhancer(LoginUpdate)

export default reduxForm({
  form: 'LoginForm',
})(LoginUpdateWithEnhancer)
