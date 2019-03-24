import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import importComponent from 'react-imported-component';

import Home from '../pages/Home'
import LoadingComponent from '../components/Loading'
import ErrorComponent from '../components/Error'

const About = importComponent(() => import("../pages/About"), {
  LoadingComponent,
  ErrorComponent
});

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => <About />} />
      <Redirect to="/" />
    </Switch>
  </>
)
export default App
