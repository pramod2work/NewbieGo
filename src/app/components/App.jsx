import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ThemeProvider } from 'styled-components'

import LoginComponent from './LogIn'
import HeaderComponent from './Header'
import ProfileComponent from './Profile'
import { gotoPage } from './history'

import {
  AppContainer,
  AppMain,
  MainContainer,
} from '../style/styles'
import styleVars, { gridTheme } from '../style/global'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location

    if (this.props.location.pathname !== pathname) {
      // Scroll is handled by native iOS kit
      if (!styleVars.app.isIOS) {
        window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <ThemeProvider theme={gridTheme}>
          <div>
            <AppContainer id="app-main-container">
              <HeaderComponent />
              <AppMain>
                <MainContainer>
                  <div id="sectionConatiner">
                    <Switch>
                      <Route
                        exact
                        path='/login'
                        component={LoginComponent}
                      />
                      <Route
                        exact
                        path='/profile'
                        component={ProfileComponent}
                      />
                      <Redirect to='/login' />
                    </Switch>
                  </div>
                </MainContainer>
              </AppMain>
            </AppContainer>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

App.defaultProps = {
  location: { pathname: '' },
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    customBack: PropTypes.bool,
    customProps: PropTypes.any,
    isSelfService: PropTypes.bool,
  }),
}

export default App
