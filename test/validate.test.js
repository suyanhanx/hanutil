describe('validate模块', function () {
  describe('#isEmail', function () {
    it('123@qq.com is a valid email', function () {
      assert(hanutil.isEmail('123@qq.com'))
    })
    it("123.qq.com isn't a valid email", function () {
      assert.equal(hanutil.isEmail('123.qq.com'), false)
    })
  })

  describe('#isIdCard', function () {
    it('isIdCard(123456789123456789) should return false', function () {
      assert.equal(hanutil.isIdCard('123456789123456789'), false)
    })
    it('isIdCard("230603197702061497") should return true', function () {
      assert(hanutil.isIdCard('230603197702061497'))
    })
  })

  describe('#isPhoneNum', function () {
    it('isPhoneNum(12345678910) should return false', function () {
      assert.equal(hanutil.isPhoneNum('12345678910'), false)
    })
    it('isPhoneNum(18845678910) should return false', function () {
      assert(hanutil.isPhoneNum('18845678910'))
    })
    it('isPhoneNum(18845678910) number should return false', function () {
      assert(hanutil.isPhoneNum(18845678910))
    })
  })

  describe('#isTaxNumber', function () {
    // 这个税号是盛大的。。
    it('isTaxNumber(310115772133604) should return true', function () {
      assert(hanutil.isTaxNumber('310115772133604'))
    })
  })
})
