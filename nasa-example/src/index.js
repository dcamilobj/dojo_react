import React from 'react'
import ReactDom from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {App, NASA} from './App'


ReactDom.render(
  <div>
    <App />
    <NASA />
  </div>,
  document.getElementById('root'))

  registerServiceWorker()
