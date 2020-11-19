import React, { useState } from 'react';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Success from '../pages/Success';
import Failure from '../components/Failure';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../css/styles.css'



function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Signup} />
        <Route path='/login' exact component={Login} />
        <Route path='/success' component={Success} />
        <Route path='/failure' component={Failure} />
      </Switch>
    </Router>
  )
};

export default App;