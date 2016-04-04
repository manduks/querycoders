import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Main from './main.jsx';
import App from '../imports/ui/App.jsx';
import Legend from '../imports/ui/Legend.jsx';

Meteor.startup(() => {
  let app = document.createElement('div');

  app.id = 'App';
  document.body.appendChild(app);
  document.title = 'Query Coders';

  render((
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <IndexRoute component={App} />
      <Route path="/about" component={Legend} />
      </Route>
    </Router>
  ), app);

  //render(<App />, app);
});
