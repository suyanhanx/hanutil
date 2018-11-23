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

    it('日期错误的身份证号 isIdCard(110105194902310026) should return false', function () {
      assert.equal(hanutil.isIdCard('110105194902310026'), false)
    })

    it('校验码错误的身份证号 isIdCard(110105194912310021) should return false', function () {
      assert.equal(hanutil.isIdCard('110105194912310021'), false)
    })

    it('省份错误的身份证号 isIdCard(160105194912310029) should return false', function () {
      assert.equal(hanutil.isIdCard('160105194912310029'), false)
    })

    it('isIdCard("230603197702061497") should return true', function () {
      assert(hanutil.isIdCard('230603197702061497'))
    })
  })

  describe('#isPhoneNum', function () {
    it('isPhoneNum(12345678910) should return false', function () {
      assert.equal(hanutil.isPhoneNum('12345678910'), false)
    })

    it('isPhoneNum(18845678910) should return true', function () {
      assert(hanutil.isPhoneNum('18845678910'))
    })

    it('isPhoneNum(18845678910) number should return true', function () {
      assert(hanutil.isPhoneNum(18845678910))
    })

    it('isPhoneNum(8618845678910) number should return true', function () {
      assert(hanutil.isPhoneNum('8618845678910'))
    })

    it('isPhoneNum(+08618845678910) number should return true', function () {
      assert(hanutil.isPhoneNum('+08618845678910'))
    })
  })

  describe('#isTaxNumber', function () {
    // 这个税号是盛大的。。
    it('isTaxNumber(310115772133604) should return true', function () {
      assert(hanutil.isTaxNumber('310115772133604'))
    })
  })

  describe('#isCarNumber', function() {
    it('isCarNumber("沪AX2345") should true', function () {
      assert(hanutil.isCarNumber('沪AX2345'))
    })

    it('isCarNumber("沪AX235") should false', function () {
      assert.equal(hanutil.isCarNumber('沪AX235'), false)
    })

    it('isCarNumber("") should false', function () {
      assert.equal(hanutil.isCarNumber(''), false)
    })
  })
})
