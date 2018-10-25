describe('object模块', function () {
  describe('#deepAssign', function () {
    it('null deepAssign anything should return null', function () {
      assert.deepEqual(hanutil.deepAssign(null, {}), null)
      assert.deepEqual(hanutil.deepAssign(null, null), null)
      assert.deepEqual(hanutil.deepAssign(null, undefined), null)
    })
    it('undefined deepAssign object should return undefined', function () {
      assert.deepEqual(hanutil.deepAssign(undefined, {}), undefined)
      assert.deepEqual(hanutil.deepAssign(undefined, null), undefined)
    })
  })
})
