import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  let app = document.createElement('div');
  app.id = 'App';
  document.body.appendChild(app);
  document.title = 'Query Coders';
  render(renderRoutes(), app);
});
