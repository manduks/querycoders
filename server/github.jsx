Meteor.methods({
  'github.find'(text) {
    const result = HTTP.get("https://api.github.com/search/users?q=location:oaxaca+language:javascript+type:user&sort=followers&order=desc", {
      headers: {
        "User-Agent": "manduks"
      }
    });
    console.log(result.content)
    console.log(result.data)
    return result.data;
  }
});
