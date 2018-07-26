import React, {Component} from 'react'
import PropTypes from 'prop-types'


import {
  DonutSvg,
  StrokeFill,
  StrokeComplete,
  ChartValue,
  TextValue,
  TextPercent,
} from './styles'

class DonutChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <DonutSvg width={this.props.size} height={this.props.size}>
        <StrokeFill r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
        <StrokeComplete r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
        <ChartValue x={halfsize + 5} y={halfsize + 5}>
          <TextValue>{this.props.value}</TextValue>
          <TextPercent>%</TextPercent>
        </ChartValue>
      </DonutSvg>
    );
  }
}

DonutChart.defaultProps = {
  value: 40,
  valuelabel: '',
  size: 90,
  strokewidth:12,
}

DonutChart.propTypes = {
  value: PropTypes.number,        // value the chart should show
  valuelabel: PropTypes.string,   // label for the chart
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number   // width of chart line
}

export default DonutChart
