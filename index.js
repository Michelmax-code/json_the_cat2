const { fetchBreed } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreed(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(description);
  }
});