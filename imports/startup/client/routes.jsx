import React from 'react';
//import { Meteor } from 'meteor/meteor';
//import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

//import Main from './main.jsx';
//import App from '../imports/ui/App.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import SignIn from '../../ui/sessions/SignIn.jsx';
import SignUp from '../../ui/sessions/SignUp.jsx';
import Pay from '../../ui/Pay.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/pay" component={Pay} />
    </Route>
  </Router>
);
