import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Main from './main.jsx';
import App from '../imports/ui/App.jsx';
import SignIn from '../imports/ui/sessions/SignIn.jsx';
import SignUp from '../imports/ui/sessions/SignUp.jsx';
import Pay from '../imports/ui/Pay.jsx';

Meteor.startup(() => {
  let app = document.createElement('div');

  app.id = 'App';
  document.body.appendChild(app);
  document.title = 'Query Coders';

  render((
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
      <IndexRoute component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/pay" component={Pay} />
      </Route>
    </Router>
  ), app);
});
