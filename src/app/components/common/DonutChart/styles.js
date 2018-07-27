import styled from 'styled-components'

import styleVars from '../../../style/global'

export const DonutSvg = styled.svg`
  border-radius: 50%;
`

export const StrokeFill = styled.circle`
  fill: transparent;
  stroke: ${styleVars.color.donutColor};
  stroke-width: 26;
`

export const StrokeComplete = styled.circle`
  fill: transparent;
  stroke: ${styleVars.color.oceanBlue};
  stroke-width: 26;
  stroke-linecap: round;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray .3s ease;
`

export const ChartValue = styled.text`
  text-anchor: middle;
  fill: ${styleVars.color.primaryStone};
`

export const TextValue = styled.tspan`
  font-size:22px;
`

export const TextPercent = styled.tspan`
  font-size:14px;
`
