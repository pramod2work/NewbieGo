import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

import enhancer from './enhancer'
import PrimaryActionBar from '../common/PrimaryActionBar'
import { Heading, HeadingSpan } from '../../style/content.styles'
import {
  SectionContainer,
  TransitionStateFromRight,
  ScaleSectionContainer,
  Grid,
  GridColHeader,
} from '../../style/styles'

export class PreferredNameUpdate extends Component {
  render() {
    const {
      logInData,
    } = this.props

    return (
      <TransitionStateFromRight>
        <SectionContainer>
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

              <PrimaryActionBar
                actionButtonLabel="Done"
                handleClick={() => {}}
                paddingTop="24px"
                paddingBottom="0px"
                actionType="button"
              />
            </ScaleSectionContainer>

          </Grid>
        </SectionContainer>
      </TransitionStateFromRight>
    )
  }
}

PreferredNameUpdate.defaultProps = {
  formValues: {},
}

PreferredNameUpdate.propTypes = {
  logInInitData: PropTypes.shape({
    inProgress: PropTypes.bool,
  }).isRequired,
  formValues: PropTypes.shape({
    userName: PropTypes.string,
    password: PropTypes.string,
  }),
}

export const PreferredNameUpdateWithEnhancer = enhancer(PreferredNameUpdate)

export default reduxForm({
  form: 'UpdatePreferredNameForm',
})(PreferredNameUpdateWithEnhancer)
