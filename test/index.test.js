var should = require('chai').should()
  , unique = require('..')

it('should remove duplicates', function () {
	unique([1,1,1,2,1]).should.deep.equal([1,2])
	unique(['a', 'b', 'a', 'b']).should.deep.equal(['a','b'])
})

it('should maintain the original ordering', function () {
	unique([true, false, false, true]).should.deep.equal([true, false])
})

it('should always return a new array', function () {
	var a = []
	unique(a).should.be.an('array').and.not.equal(a)
})
