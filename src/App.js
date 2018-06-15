import React, { Component } from 'react'
import logo from './logo.svg'
import FrappeChart from './FrappeChart'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.handleSelectData = this.handleSelectData.bind(this)
  }

  handleSelectData (data) {
    console.log('Data selected', data)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          A react/frappe example that <i>actually works</i>
        </p>

        <FrappeChart
          title='Test Bar Chart'
          type='bar'
          height={250}
          data={{
            labels: [
              '12am-3am', '3am-6pm', '6am-9am', '9am-12am'
            ],
            datasets: [
              {
                title: 'Some Data',
                color: 'light-blue',
                values: [40, 30, 25, 35]
              }
            ]
          }}
          colors={['purple']}
          isNavigable
          valuesOverPoints
          onSelect={this.handleSelectData} />
      </div>
    )
  }
}

export default App

// overlay hack
// handleMountChart (chart) {
//   chart.overlays = []
//   chart.makeOverlay = () => {}
//   chart.updateOverlay = () => {}
//   chart.bindOverlay = () => {}
//   chart.setCurrentDataPoint = (index) => { this.handleSelectData(chart.getDataPoint(index)) }
// }
