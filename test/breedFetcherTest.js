const { fetchBreed } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreed('Siberian', (err, body) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, body.trim());

      done();
    });
  });

  it('returns error because the breed not exist', (done) => {
    fetchBreed('Dog', (err) => {
      // we expect error for this scenario
      assert.equal(err, 'The breed requested does not exist!');
      done();
      
    });
  });
});