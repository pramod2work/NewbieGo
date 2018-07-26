import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

import PrimaryActionBar from '../common/PrimaryActionBar'
import { Heading, HeadingSpan, LargeFont, WrapWord } from '../../style/content.styles'
import {
  SectionContainer,
  TransitionStateFromRight,
  ScaleSectionContainer,
  Grid,
  GridColumn,
  GridColHeader,
} from '../../style/styles'
import { ProfileHeaderSection, ProfileAvatar, ProfileUserData } from './styles'

export class ProfileComponent extends Component {
  render() {
    const {
      logInData,
    } = this.props

    return (
      <TransitionStateFromRight>
        <ProfileHeaderSection>
            <Grid data-test-id="profile-header-section">
              <GridColumn paddingLeft="0px" paddingRight="0px" data-test-id="profile-user-header-section">
                <ProfileAvatar />
                <ProfileUserData data-test-id="profile-user-header">
                  <div>
                    <LargeFont>
                      <WrapWord data-test-id="user-welcome-note">
                        Welcome, Mitchele
                      </WrapWord>
                    </LargeFont>
                  </div>
                </ProfileUserData>
              </GridColumn>
            </Grid>
          </ProfileHeaderSection>
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

ProfileComponent.defaultProps = {
  formValues: {},
  logInInitData: {},
}

ProfileComponent.propTypes = {
  logInInitData: PropTypes.shape({
    inProgress: PropTypes.bool,
  }).isRequired,
  formValues: PropTypes.shape({
    userName: PropTypes.string,
    password: PropTypes.string,
  }),
}

export default reduxForm({
  form: 'ProfileForm',
})(ProfileComponent)
