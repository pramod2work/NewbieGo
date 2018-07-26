import styled, { css } from 'styled-components'

import { SectionContainer } from '../../style/styles'
import profileAvatarBlueImg from '../../../assets/img/avatar-blue.svg'

export const ProfileHeaderSection = SectionContainer.extend`
  border: none;
  box-shadow: none;
  border-radius: 0;
  background-color: transparent;
  min-height: auto;
  margin: 0 0 40px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`

export const ProfileAvatar = styled.img.attrs({
  src: profileAvatarBlueImg,
  alt: 'profile avatar',
})`
  width: 40px;
  height: 40px;
  display: inline-block;
`

export const ProfileUserData = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-left: 16px;
  max-width: 80%;
`
