import styled, { css } from 'styled-components'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ContentClearButton from 'material-ui/svg-icons/navigation/cancel'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import ContentBackspace from 'material-ui/svg-icons/content/backspace'
import ContentClear from 'material-ui/svg-icons/content/clear'
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle'
import Done from 'material-ui/svg-icons/action/done'
import fingerPrintIcon from 'material-ui/svg-icons/action/fingerprint'
import './global.styles'

import styleVars, {
  extraLargeFont,
  largeFont,
  extraSmallFont,
  smallFont,
  mediumFont,
} from './global'

export const Heading = styled.h1`
  margin: 0 0 ${props => props.marginBottom || '48px'};
  ${{ ...extraLargeFont }}
`

// need this child dom element to overrride ios font size if needed
export const HeadingSpan = styled.span``

// Font size to support dynamic text iOS
const iconMediumFontSize = {
  width: '24px',
  height: '24px',
}

export const LargeFont = styled.span`
  ${{ ...largeFont }};
`
export const MediumFont = styled.span`
  ${{ ...mediumFont }};
`
export const SmallFont = styled.span`
  ${{ ...smallFont }};
`
export const ExtraSmallFont = styled.span`
  ${{ ...extraSmallFont }};
`
export const LighterFont = styled.span`
  color: ${styleVars.color.lighterFontStone70};
`
export const ExtraLighterFont = styled.span`
  color: ${styleVars.color.disabledStone40};
`

export const IconBackAction = {
  color: styleVars.color.lighterFontStone70,
  width: '30px',
  height: '28px',
}

export const WrapWord = styled.span`
  word-break: break-word;
`

export const LighterFontSection = styled.div`
  margin: 16px 0 0;
  color: ${props => (props.lightColor ? styleVars.color.lighterFontStone70 : '')};
`

export const HorzSeperator = styled.hr`
  margin: ${props => (props.marginTop || '10px')} 0  ${props => (props.marginBottom || '15px')};
  border: 0;
  border-top: ${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${styleVars.color.stoneLight};

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    margin-left: -${styleVars.sectionContainer.paddingHorizontal.sm};
    margin-right: -${styleVars.sectionContainer.paddingHorizontal.sm};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    margin-left: -${styleVars.sectionContainer.paddingHorizontal.xs};
    margin-right: -${styleVars.sectionContainer.paddingHorizontal.xs};
  }
`

export const HorzParaSeperator = HorzSeperator.extend`
  margin-bottom: 32px;
`

export const HorzRowSeperator = HorzSeperator.extend`
  margin-left: 0;
`

export const IconKeyboardArrowRight = styled(HardwareKeyboardArrowRight).attrs({
  focusable: 'false',
})`
  float: right;
`

export const IconKeyboardArrowLeft = styled(HardwareKeyboardArrowLeft).attrs({
  focusable: 'false',
})`
  float: left;
`

export const IconAddCircle = styled(ContentAddCircle).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${styleVars.color.green} !important;
  width: 16px !important;
  height: 16px !important;
`

export const IconClearButton = styled(ContentClearButton).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${styleVars.color.lighterFontStone70} !important;
  width: 16px !important;
  height: 16px !important;
  ${styleVars.app.iOSFontStrength > 6 && css`
    width: 20px !important;
    height: 20px !important;
  `}
  ${styleVars.app.iOSFontStrength > 10 && css`
    width: 24px !important;
    height: 24px !important;
  `}
`

export const IconRemoveCircle = styled(ContentRemoveCircle).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${styleVars.color.red} !important;
  width: 16px !important;
  height: 30px !important;
`

export const IconBackspace = styled(ContentBackspace).attrs({
  focusable: 'false',
})`
  color: ${styleVars.color.primaryStone} !important;
`

export const IconClear = styled(ContentClear).attrs({
  focusable: 'false',
})`
  color: ${styleVars.color.primaryStone} !important;
  height: 35px !important;
  width: 35px !important;
`

export const IconCheckCircle = styled(ActionCheckCircle).attrs({
  focusable: 'false',
})`
  color: ${styleVars.color.primaryStone} !important;
  width: 16px !important;
  height: 16px !important;
`

export const IconTickRight = styled(Done).attrs({
  focusable: 'false',
})`
  float: right;
  color: ${styleVars.color.oceanBlue} !important;
`

export const IconFingerprint = styled(fingerPrintIcon).attrs({
  focusable: 'false',
})`
  color: ${styleVars.color.oceanBlue} !important;
  width: 80px !important;
  height: 88px !important;
  margin-bottom: 24px;
`

export const ParaWrapper = styled.div`
  padding-left: ${props => (props.paddingLeft || 0)};
  margin: 0 0 ${props => (props.marginBottom || 0)};
`
