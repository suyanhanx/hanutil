describe('Array模块', function () {
  describe('#arrayEquals', function () {
    it('arrayEquals([1,2,3],[1,2,3]) should return true', function () {
      assert(hanutil.arrayEquals([1,2,3], [1,2,3]))
    })
    it('arrayEquals([1],[1,2]) should return false', function () {
      assert.equal(hanutil.arrayEquals([1], [1,2]), false)
    })
    it('arrayEquals([1,2,3],[1,2,4]) should return false', function () {
      assert.equal(hanutil.arrayEquals([1,2,3], [1,2,4]), false)
    })
  })
  describe('#convertClass', function () {
    it('convertClass for null or undefined or empty return []', function () {
      assert.deepStrictEqual(hanutil.convertClass(null), [])
      assert.deepStrictEqual(hanutil.convertClass(undefined), [])
      assert.deepStrictEqual(hanutil.convertClass(''), [])
      assert.deepStrictEqual(hanutil.convertClass(0), [])
    })
    it(`convertClass('1 2 3 4') should return ['1', '2', '3', '4']`, function () {
      assert.deepStrictEqual(hanutil.convertClass('1 2 3 4'), ['1', '2', '3', '4'])
    })
    it('convertClass({a:1,b:2}) should return ["a","b"]', function () {
      assert.deepStrictEqual(hanutil.convertClass({a:1,b:2}), ['a','b'])
    })
  })
  describe('#isArray', function () {
    it('isArray({}) should return false', function () {
      assert.equal(hanutil.isArray({}), false)
    })

    it('isArray([]) should return true', function () {
      assert(hanutil.isArray([]))
    })

    it('isArray(1) should return false', function () {
      assert.equal(hanutil.isArray(1), false)
    })
  })
})
