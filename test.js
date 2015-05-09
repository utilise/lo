var expect = require('chai').expect
  , lo = require('./')

describe('lo', function() {
  it('should lowercase a string', function() {
    expect(lo('FOO BAR')).to.eql('foo bar')
  })
})