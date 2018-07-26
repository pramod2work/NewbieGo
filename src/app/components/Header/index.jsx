import React from 'react'
import PropTypes from 'prop-types'
import { HeaderContainer, HeaderSection, NewbieGoLogo } from './styles'
import newbieGoLogo from '../../../assets/img/newbie-logo.png'
import { MainContainer, SectionStyle } from '../../style/styles'

const Header = () => (
  <HeaderContainer>
    <HeaderSection>
      <MainContainer style={{ marginTop: 0, marginBottom: 0 }}>
        <SectionStyle>
          <div>
            <NewbieGoLogo data-test-id="header-logo" src={newbieGoLogo} alt="Newbie Logo" />
          </div>
        </SectionStyle>
      </MainContainer>
    </HeaderSection>
  </HeaderContainer>
)

export default Header
