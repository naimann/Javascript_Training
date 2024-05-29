console.log("Hello World");

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {

    // handle success
    console.log("Success: \n" + response);
    console.log(response);

  })
  .catch(function (error) {

    // handle error
    console.log("Failed: \n" + error);

  })
  .finally(function () {
    
    // always executed

  });