const request = require('request');
const breed = process.argv[2];

const fetchBreed = (breed, callback) => {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return null;
    }
    if (response.statusCode !== 200) {
      callback('statusCode: ' + response.statusCode, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('The breed requested does not exist!');
      return null;
    }
    callback(null, data[0].description);
  });
};
const callback = (error, description) => {
  if (error) {
    console.log(error);
  } else if (description) {
    console.log(description);
  }

};
console.log(fetchBreed(breed, callback));