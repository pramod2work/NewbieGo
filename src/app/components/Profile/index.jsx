import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Checkbox from 'material-ui/Checkbox'
import PropTypes from 'prop-types'

import DonutChart from '../common/DonutChart'
import { Heading, HeadingSpan, MediumFont, ParaWrapper, SmallFont, LighterFont, ExtraLighterFont } from '../../style/content.styles'
import {
  TransitionStateFromRight,
  ScaleSectionContainer,
  Grid,
  GridRow,
  GridColumn,
  GridColHeader,
  InputWrapper,
  EventDetails,
} from '../../style/styles'
import styleVars from '../../style/global'
import event1 from '../../../assets/img/event-1.png'
import event2 from '../../../assets/img/event-2.png'
import event3 from '../../../assets/img/event-3.png'

const renderCheckbox = ({ input, label, ...rest }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
    color="primary"
    {...rest}
  />
)


export class ProfileComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 40 }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ ...this.state, value: 42 })
    }, 1000)
  }

  componentDidUpdate() {
    const { value } = this.state
    if (value < 60) {
      window.setTimeout(() => {
        this.setState({ ...this.state, value: value + 1 })
      }, 500)
    }
  }

  render() {
    const {
      handleSubmit,
    } = this.props

    return (
      <TransitionStateFromRight>
        <Grid>
          <GridColHeader>
            <Heading data-test-id="page-heading" marginBottom="32px">
              <HeadingSpan>
                Welcome, Michelle
              </HeadingSpan>
            </Heading>
          </GridColHeader>

          <ScaleSectionContainer>
            <p>
              I'd like to welcome you to ANZ. We are excited that you have accepted our job offer and agreed upon your start date.
              I trust that this letter finds you mutually excited about your new employment with ANZ.
            </p>
            
            <p style={{ marginBottom: '48px' }}>
              As mentioned during the interviews, while your new position reports to me, I'd like to welcome you to the NEWBIE GO Department on behalf of all of the staff.
              Each of us will play a role to ensure your successful integration into the department.
            </p>

            <ParaWrapper marginBottom="4px">
              <MediumFont>Hold on tight, you're almost there.</MediumFont>
            </ParaWrapper>

            <GridRow noBorder marginBottom="32px">
              <GridColumn xs={2}>
                <DonutChart value={this.state.value} />
              </GridColumn>

              <GridColumn xs={10}>
                <ParaWrapper paddingLeft="25px" marginBottom="5px">
                  <ExtraLighterFont>
                    <SmallFont>Retreive your details from Corporate Directory</SmallFont>
                  </ExtraLighterFont>
                </ParaWrapper>
                <ParaWrapper paddingLeft="15px">
                  <b>Setting up your mailbox and address book...</b>
                </ParaWrapper>
                <ParaWrapper paddingLeft="25px">
                  <ExtraLighterFont>
                    <SmallFont>Set up login credentials on your laptop</SmallFont>
                  </ExtraLighterFont>
                </ParaWrapper>
                <ParaWrapper paddingLeft="33px">
                  <ExtraLighterFont>
                    <SmallFont>Verify your login accross ANZ network</SmallFont>
                  </ExtraLighterFont>
                </ParaWrapper>
              </GridColumn>
            </GridRow>

            <GridColHeader>
            <Heading data-test-id="page-heading" marginBottom="8px">
              <HeadingSpan>
                Your checklist for onboarding
              </HeadingSpan>
            </Heading>
          </GridColHeader>

          <GridRow noBorder marginBottom="32px">
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <GridColumn xs={12} paddingBottom="8px">
                <InputWrapper checked>
                  <Field
                    name="welcomePack"
                    component={renderCheckbox}
                    label="Receive welcome pack & logged in to NewbieGo!"
                    checked
                  />
                </InputWrapper>
              </GridColumn>
              <GridColumn xs={12} paddingBottom="8px">
                <InputWrapper>
                  <Field
                    name="induction"
                    component={renderCheckbox}
                    label="Attend the induction session on your first day, Monday 11th Sep 2018."
                    disabled
                  />
                </InputWrapper>
              </GridColumn>
              <GridColumn xs={12} paddingBottom="8px">
                <InputWrapper>
                  <Field
                    name="personalProfile"
                    component={renderCheckbox}
                    label="Complete your personal profile."
                    disabled
                  />
                </InputWrapper>
              </GridColumn>
              <GridColumn xs={12} paddingBottom="8px">
                <InputWrapper>
                  <Field
                    name="complaince"
                    component={renderCheckbox}
                    label="Complete the mandatory ANZ complaince training."
                    disabled
                  />
                </InputWrapper>
              </GridColumn>
              <GridColumn xs={12} paddingBottom="8px">
                <InputWrapper>
                  <Field
                    name="tax"
                    component={renderCheckbox}
                    label="Return your signed ATO's tax file declaration form."
                    disabled
                  />
                </InputWrapper>
              </GridColumn>
            </form>
          </GridRow>

            <GridColHeader>
              <Heading data-test-id="page-heading" marginBottom="8px">
                <HeadingSpan>
                  Things at ANZ this week
                </HeadingSpan>
              </Heading>
            </GridColHeader>

            <Grid>
              <GridRow noBorder>
                <EventDetails src={event1} />
                <EventDetails src={event2} />
                <EventDetails src={event3} />
              </GridRow>
            </Grid>

          </ScaleSectionContainer>

        </Grid>
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
  handleSubmit: PropTypes.func,
  formValues: PropTypes.shape({
    userName: PropTypes.string,
    password: PropTypes.string,
  }),
}

export default reduxForm({
  form: 'ProfileForm',
})(ProfileComponent)
