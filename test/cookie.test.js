describe('Cookie模块',function () {
  describe('#setCookie', function () {
    it('cookie设置后应可读取', function () {
      hanutil.setCookie('name', 'Tom')
      assert(document.cookie, 'name=Tom')
    })
  })

  describe('#getCookie', function () {
    beforeEach(function () {
      hanutil.setCookie('name','Tom','1s')
    })
    it('设置cookie后必须可读取',function () {
      assert.equal(hanutil.getCookie('name'),'Tom')
    })
    it('设置cookie后必须可读取且在规定的过期时间后不可读取',function (done) {
      assert.equal(hanutil.getCookie('name'), 'Tom')
      setTimeout(() => {
        assert.equal(hanutil.getCookie('name'), null)
        done()
      }, 1000)
    })
    it('尝试获取不存在的cookie应返回null',function () {
      assert.equal(hanutil.getCookie('nothing', null))
    })
  })

  describe('#removeCookie', function () {
    before(function () {
      hanutil.setCookie('name', 'Tom')
    })
    it('after removeCookie should return null', function () {
      assert.equal(hanutil.getCookie('name'), 'Tom')
      hanutil.removeCookie('name')
      assert.equal(hanutil.getCookie('name'), null)
    })
  })
})
