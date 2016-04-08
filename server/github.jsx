Meteor.methods({
  'github.find'(text) {
    const request = require('request');
    console.log('request started');
    request('https://api.github.com/search/users?q=location:oaxaca+language:javascript+type:user&sort=followers&order=desc', function (error, response, body) {
      console.log(arguments);
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    });
  }
});
