const assert = require('assert')
const Calculate =  require('../index')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value of 5!', () => {
      //Setup
      const inputNumber = 5
      const expectedResult = 120
      
      //Exercise
      const result = Calculate.factorial(inputNumber)

      //Verify
      assert.equal(result, expectedResult)
    })

    
  })
})