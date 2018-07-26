import styled, { css } from 'styled-components'
import { Grid as ThemeGrid, Row, Col } from 'react-styled-flexboxgrid'

import { isIE } from '../utils/global'

import styleVars, { largeFont } from './global'
import {
  SlideStateSideFromRight,
  SlideStateSideFromLeft,
  SlideStateTop,
  OverlayModalTop,
  SlideStateDown,
  ScaleSection,
} from './animation.styles'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const AppMain = styled.main`
  flex: 1 0 auto;
  background-color: ${styleVars.color.white};
`

/* eslint-disable no-nested-ternary */
export const MainContainer = styled.div`
  margin: 48px auto 0;
  max-width: ${styleVars.container.width.lg};

  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    max-width: ${styleVars.container.width.md};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    max-width: ${styleVars.container.width.sm};
    margin: ${styleVars.app.isMobileApp ? '24px auto 0' : '140.5px auto 24px'};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    max-width: ${styleVars.container.width.xs};
  }
`
/* eslint-enable no-nested-ternary */

export const SectionContainer = styled.div`
  min-height: ${styleVars.sectionContainer.minHeight};
  background-color: ${props => (props.noBackgroundColor ? 'transparent' : styleVars.color.white)};
  border: ${props => ((props.noBorder || styleVars.app.isMobileApp) ? 'none' : `1px solid ${styleVars.color.stoneLight}`)};
  border-radius: 3px;
  padding: ${styleVars.sectionContainer.paddingTop.lg};
  padding-left: ${styleVars.sectionContainer.paddingHorizontal.lg};
  padding-right: ${styleVars.sectionContainer.paddingHorizontal.lg};
  padding-bottom: ${styleVars.sectionContainer.paddingBottom.lg};

  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    padding-top: ${styleVars.sectionContainer.paddingTop.md};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.md};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.md};
    padding-bottom: ${styleVars.sectionContainer.paddingBottom.md};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-top: ${styleVars.sectionContainer.paddingTop.sm};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-bottom: ${styleVars.sectionContainer.paddingBottom.sm};
    border: none;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding: ${styleVars.sectionContainer.paddingTop.xs} ${styleVars.sectionContainer.paddingHorizontal.xs} ${styleVars.sectionContainer.paddingBottom.xs};
  }
`

export const SmallSectionContainer = SectionContainer.extend`
  max-width: ${styleVars.container.width.md};
  min-height: ${props => (props.minHeight || styleVars.sectionContainer.minHeight)};
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    width: 100%;
  }
`
export const CenteredSmallSectionContainer = SmallSectionContainer.extend`
  text-align: center;
`

export const ModalMainContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1055;
  overflow: scroll;
  animation: ${OverlayModalTop} 0.4s ease 1;
  background-color: ${styleVars.color.stoneExtraLight}
  ${props => props.hidden && css`
    animation: ${SlideStateDown} 0.4s ease 1;
    pointer-events: none;
  `}
  ${props => props.show && css`
    animation: ${OverlayModalTop} 0.4s ease 1;
  `}
`

export const ModalMainSection = MainContainer.extend`
  margin-top: 0;
  margin-bottom: 0 !important;
  max-width: ${styleVars.container.width.md};
`

export const ModalSectionContainer = SectionContainer.extend`
  border: none;
  box-shadow: none;
  margin-top: 0 !important;
  text-align: center;
  border-radius: 0;
  padding: 16px 24px !important;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding: 16px !important;
  }
`

export const Grid = styled(ThemeGrid)`
  max-width: 100%;
`

export const TransitionStateFromRight = styled.div`
  position: relative;
  ${!styleVars.app.isIOS && css`
    animation: ${SlideStateSideFromRight} 0.2s ease 0.1s both;
  `}
`

export const TransitionStateFromLeft = styled.div`
  position: relative;
  ${!styleVars.app.isIOS && css`
    animation: ${SlideStateSideFromLeft} 0.2s ease 0.1s both;
  `}
`

export const TransitionStateTop = styled.div`
  position: relative;
  ${!styleVars.app.isIOS && css`
    animation: ${SlideStateTop} 1s ease 0.1s both;
  `}
`

export const ScaleSectionContainer = styled.div`
  position: relative;
  ${!styleVars.app.isIOS && css`
    animation: ${ScaleSection} 0.2s ease 0.1s both;
  `}
`

export const ButtonText = styled.button.attrs({
  type: props => props.type || 'button',
})`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0 !important;
  width: ${props => props.width || 'auto'} !important;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: transparent;
  }
`

export const ButtonPrimaryText = ButtonText.extend`
  color: ${props => (props.disabled ? styleVars.color.disabledStone40 : styleVars.color.oceanBlue)};

  &:hover {
    color: ${props => (props.disabled ? styleVars.color.disabledStone40 : styleVars.color.lightOceanBlue)};
  }
`

export const ButtonIosStyle = ButtonPrimaryText.extend`
  ${{ ...largeFont }};
  font-weight: 600 !important;
  padding: ${props => (props.paddingTop ? '0' : '8px')} 2px ${props => (props.paddingBottom ? '0' : '8px')};
  -webkit-tap-highlight-color: transparent;
`

export const BackActionBarContainer = MainContainer.extend`
  min-height: 48px;
  margin-bottom: 0;
  margin-top: 0 !important;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
    margin-bottom: 0;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
    margin-bottom: 0;
  }
`

export const BackActionBarSection = styled.button`
  box-shadow: none;
  min-height: 48px;
  padding: 18px 2px 10px;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  border: none;
  width: 40%;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    width: 50%;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    width: 65%;
  }

  &:focus,
  &:hover {
    padding: 16px 0 8px;
    outline: none;
    border: 2px solid ${styleVars.color.oceanBlue};
    border-radius: 4px;
  }
`

export const BackActionBar = styled.div`
  background-color: ${styleVars.color.white};
  border-bottom: 0.5px solid ${styleVars.color.stoneLight};
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 60px;
`

export const ButtonPrimaryAndroid = styled.button`
  width: 100%;
  margin: 24px 0 ${props => (props.marginBottom || '0')};
  background-color: ${props => (props.isDisabled === 'Y' ? styleVars.color.disabledStone40 : styleVars.color.oceanBlue)};
  color: ${styleVars.color.white};
  border: 1px solid transparent;
  border-radius: 4px;
  padding: ${props => (props.isSubmitting === 'Y' ? '9px 12px 5px' : '14px 12px 10px')};
  cursor: pointer;
  ${styleVars.app.isMobileApp && css`
    border-radius: 2px;
    text-transform: uppercase;
    padding: ${props => (props.isSubmitting === 'Y' ? '7px 12px' : '12px')};
  `}

  &:disabled {
    cursor: not-allowed;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: ${props => (props.isDisabled === 'Y' ? styleVars.color.disabledStone40 : styleVars.color.lightOceanBlue)};
  }
`

export const PaddingBreakpoint = css`
  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
  }
`

export const SectionStyle = styled.div`
  ${PaddingBreakpoint};
`

/* stylelint-disable declaration-colon-newline-after, value-list-max-empty-lines */
export const RowTitle = styled(Row)`
  padding-bottom: ${props => (props.paddingBottom || '11px')};
  margin: 0;
  border-bottom: ${props => (
    props.noBorder ? 'none'
      : `${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${styleVars.color.stoneLight}`
  )};
  border-top: ${props => (
    props.borderTop ?
      `${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${props.error ? styleVars.color.red : styleVars.color.stoneLight}`
      : 'none'
  )};
`
/* stylelint-enable declaration-colon-newline-after, value-list-max-empty-lines */

export const GridRow = RowTitle.extend`
  padding-top: ${props => (props.paddingTop || '12px')};
  margin-bottom: ${props => (props.marginBottom || 0)};
`

export const StyledLink = styled.button.attrs({
  type: 'button',
  role: 'link',
})`
  display: block;
  width: 100%;
  color: inherit;
  cursor: pointer;
  text-decoration: inherit !important;
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
  align-items: inherit;
  text-align: inherit;
  margin-bottom: ${props => (props.endSection ? '56px' : 0)};
  ${props => props.disabled && css`
    cursor: not-allowed;
    color: ${styleVars.color.disabledStone40} !important;
  `}
  ${props => !props.noHover && !styleVars.app.isIOS && css`
    &:hover {
      background-color: ${styleVars.color.oceanBlueBlured10};
    }
  `}
  ${props => !props.noFocus && css`
    &:focus {
      background-color: ${styleVars.color.oceanBlueBlured20};
    }
  `}
`

export const InlineActionLink = StyledLink.extend`
  color: ${styleVars.color.oceanBlue};
  display: inline-block;
  width: auto;
  -webkit-tap-highlight-color: transparent;
 
  &:hover,
  &:focus {
    background-color: ${styleVars.color.white};
    ${!styleVars.app.isIOS && css`
      text-decoration: underline !important;
    `}
  }
`

export const GridColumn = styled(Col)`
  padding-left: ${props => props.paddingLeft || '16px'};
  padding-right: ${props => props.paddingRight || '16px'};
  padding-bottom: ${props => props.paddingBottom || '0'};
`

export const GridColHeader = GridColumn.extend`
  padding: 0;
`

export const ColDisplayRight = GridColumn.extend`
  text-align: right;
  padding-top: 0;

  @media screen and (min-width: ${styleVars.container.breakpoint.md}) {
    text-align: ${props => (props.alignLeftMD ? 'left' : 'right')};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    text-align: ${props => (props.alignLeftSM ? 'left' : 'right')};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    text-align: ${props => (props.alignLeftXS ? 'left' : 'right')};
  }
`

export const FixedCol = styled.div`
  width: 86%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    width: 82%;
  }
`

export const GridSecondColumn = GridColumn.extend`
  padding-top: ${styleVars.app.isMobileApp ? 0 : '24px'};
`

export const SectionContainerWithSwimLine = SectionContainer.extend`
  ${styleVars.app.isMobileApp && css`
    padding-right: 0 !important;

    .action-container {
      padding-right: 16px;
    }
  `}
`

export const InputWrapper = styled.div`
  label {
    font-family: myraid-pro !important;
  }

  ${props => props.checked && css`
    svg {
      fill: ${styleVars.color.oceanBlue} !important;
    }
    label {
      color: ${styleVars.color.oceanBlue} !important;
    }
  `}
`
