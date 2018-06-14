import React, { Component } from 'react'
import logo from './logo.svg'
import FrappeChart from './FrappeChart'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          This is a react/frappe example that <i>actually works</i>
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
              },
              {
                title: 'Another Set',
                color: 'light-blue',
                values: [25, -10, 50, 15]
              },
              {
                title: 'Another Set',
                color: 'light-blue',
                values: [10, 25, 50, -15]
              }
            ]
          }}
          colors={['green', 'light-green', 'purple']}
          onSelect={(d) => { console.log('data', d) }}
          isNavigable />
      </div>
    )
  }
}

export default App
