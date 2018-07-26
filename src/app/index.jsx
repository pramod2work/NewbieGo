import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import '../assets/img/favicon.ico'

import Root from './components/Root'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app-container'),
  )
}

render(Root)

// Hot Module Replacement API
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('./components/Root', () => render(Root))
}
