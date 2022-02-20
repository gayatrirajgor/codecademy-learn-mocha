const assert = require('assert')
//const { isTypedArray } = require('util/types');
const Rooster = require('../index')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo'

      //Exercise
      const actual = Rooster.announceDawn()

      //Verify
      assert.equal(actual, expected)
    })
  })
})

// describe('Rooster', () => {
//     describe('.announceDawn', () => {
//         it('returns a rooster call', () => {

//             //Setup
//             const expected = 'cock-a-doodle-doo!';
//             //Exercis
//             const actual = Rooster.announceDawn()
//             //Verify
//             assert.equal(actual, expected)
//         })
//     })
// })