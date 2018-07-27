import styled from 'styled-components'

import styleVars from '../../style/global'

export const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  background-color: ${styleVars.color.oceanBlue};
`

export const FooterSection = styled.div`
  width: 100%;
  color: ${styleVars.color.white};
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: right;
`

export const License = styled.span`
  white-space: nowrap;
`
