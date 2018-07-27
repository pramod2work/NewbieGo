import React from 'react'

import { FooterContainer, FooterSection } from './styles'
import { MainContainer } from '../../style/styles'

import styleVars from '../../style/global'
import anzLogo from '../../../assets/img/new-anz-logo.png'

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <MainContainer style={{ marginTop: 0, marginBottom: 0, backgroundColor: styleVars.color.oceanBlue }}>
        <img src={anzLogo} style={{ width: '120px' }} />
      </MainContainer>
    </FooterSection>
  </FooterContainer>
)

export default Footer
