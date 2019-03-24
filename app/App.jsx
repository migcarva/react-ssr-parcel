import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import importComponent from 'react-imported-component'

import Home from './pages/Home'
import LoadingComponent from './components/Loading'
import ErrorComponent from './components/Error'

const About = importComponent(() => import('./pages/About'), {
  LoadingComponent,
  ErrorComponent
})

export const renderAboutPage = () => <About />

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' render={renderAboutPage} />
      <Redirect to='/' />
    </Switch>
  </>
)
export default App
