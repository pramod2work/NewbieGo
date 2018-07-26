import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import AppComponent from './App'
import store from '../store'

import { history } from './history'

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppComponent} />
    </Router>
  </Provider>
)

export default Root
