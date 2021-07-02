const request = require('request');

const fetchBreed = (breed, callback) => {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return null;
    } else if (response.statusCode !== 200) {
      callback('statusCode: ' + response.statusCode, null);
    } else if (data.length === 0) {
      callback('The breed requested does not exist!', null);
      return null;
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreed };