
// // capitalizeFirstLetters.js
// const assert = require('assert');
// const capitalizeFirstLetters = require('../capitalizeFirstLetters');



// // Check that capitalizeFirstLetters is a function
// assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// // Check that capitalizeFirstLetters accepts one argument
// assert.strictEqual(capitalizeFirstLetters.length, 1);
// // Check that capitalizeFirstLetters transforms javaScript correctly
// assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// // Check that it works for a multiple words string
// assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// // Check that it works for a 1-character string
// assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// // Check that it works for an empty string
// assert.strictEqual(capitalizeFirstLetters(''), '');





// capitalizeFirstLetters.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
    // give the test a label using it
    it('is a function accepting one argument', () => {
      assert.strictEqual(typeof capitalizeFirstLetters, 'function');
      assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
  
    it('transforms javaScript correctly', () => {
      assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
    });
  
    it('works with a 1-character string', () => {
      assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });


    it('works with multiple words string', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
      });

  
    it('works with an empty string', () => {
      assert.strictEqual(capitalizeFirstLetters(''), '');
    });
  });

