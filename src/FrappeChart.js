import React from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import 'frappe-charts/dist/frappe-charts.min.css'

class FrappeChart extends React.Component {
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
      valuesOverPoints: PropTypes.bool,

      // non-frappe configs
      style: PropTypes.object,
      onMount: PropTypes.func
    }
  }

  constructor (props) {
    super(props)

    this.root = null
    this.chart = null

    this.handleDataSelect = this.handleDataSelect.bind(this)
  }

  handleDataSelect (event) {
    return this.props.onSelect && this.props.onSelect({
      index: event.index,
      label: event.label,
      values: event.values
    })
  }

  componentDidMount () {
    const { onSelect, onMount, ...chartProps } = this.props

    this.chart = new Chart(this.root, { ...chartProps })

    if (chartProps.isNavigable && onSelect) {
      this.chart.parent.addEventListener('data-select', this.handleDataSelect)
    }

    onMount && onMount(this.chart)
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

export default FrappeChart
