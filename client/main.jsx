import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  let app = document.createElement('div');

  app.id = 'App';
  document.body.appendChild(app);
  document.title = 'Query Coders';

  render(<App />, app);
});
