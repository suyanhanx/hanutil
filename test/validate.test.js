describe('validate模块', function () {
  describe('#isEmail', function () {
    it('123@qq.com is a valid email', function () {
      assert(hanutil.isEmail('123@qq.com'))
    })
    it("123.qq.com isn't a valid email", function () {
      assert.equal(hanutil.isEmail('123.qq.com'), false)
    })
  })

  describe('#isPhoneNum', function () {
    it('isPhoneNum(12345678910) should return false', function () {
      assert.equal(hanutil.isPhoneNum('12345678910'), false)
    })
    it('isPhoneNum(18845678910) should return false', function () {
      assert(hanutil.isPhoneNum('18845678910'))
    })
  })
})
