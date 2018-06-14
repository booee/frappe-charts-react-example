import React from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import 'frappe-charts/dist/frappe-charts.min.css'

class ChartBuilder extends React.Component {
  static get propTypes () {
    return {
      // https://frappe.io/charts/docs/reference/configuration
      data: PropTypes.object,
      title: PropTypes.string,
      type: PropTypes.oneOf(['line', 'bar', 'axis-mixed', 'pie', 'percentage', 'heatmap']),
      colors: PropTypes.array,
      height: PropTypes.number,
      axisOptions: PropTypes.object,
      tooltipOptions: PropTypes.object,
      barOptions: PropTypes.object,
      lineOptions: PropTypes.object,
      isNavigable: PropTypes.bool,
      valuesOverPoints: PropTypes.bool
    }
  }

  static get defaultProps () {
    return {
    }
  }

  constructor (props) {
    super(props)

    this.root = null
    this.chart = null
  }

  componentDidMount () {
    const { onSelect, ...frappeProps } = this.props

    this.chart = new Chart(this.root, { ...frappeProps })

    if (frappeProps.isNavigable && onSelect) {
      this.chart.parent.addEventListener('data-select', onSelect)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.data || this.props.data !== nextProps.data) {
      this.chart.update_values(nextProps.data.datasets, nextProps.data.labels)
    }
  }

  render () {
    return (<div style={this.props.style} ref={root => (this.root = root)} />)
  }
}

export default ChartBuilder
