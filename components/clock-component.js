const React = require('react');
const IdyllComponent = require('idyll-component');
const d3Scale = require('d3-scale')

const hourScale = d3Scale.scaleLinear()
  .range([0, 360])

const minuteScale = d3Scale.scaleLinear()
  .range([0, 360 * 12])

class ClockComponent extends IdyllComponent {
  render() {
    const progress = this.props.progress || 0

    const hourRotation = hourScale(progress)
    const minuteRotation = minuteScale(progress)

    return (
      <svg width="300" height="300">
        <g transform={`translate(150,150) rotate(${hourRotation})`}>
          <rect height="113" width="6" x="-3" y="-110" fill="#000" />
        </g>
        <g transform={`translate(150,150) rotate(${minuteRotation})`}>
          <rect height="152" width="4" x="-2" y="-150" fill="#000" />
        </g>
      </svg>
    );
  }
}

module.exports = ClockComponent;
