describe('function模块', function () {
  describe('#debounce', function () {
    it('debounce 防抖，多次调用只在停止调用一段时间后执行一次', function (done) {
      let num = 0
      let interval = null
      let debounced = hanutil.debounce(() => {
        num++
        assert(num === 1)
        done()
        return true
      }, 500)
      interval = setInterval(() => {
        debounced()
      }, 20)
      setTimeout(() => {
        clearInterval(interval)
      }, 800)
    })
  })

  describe('#throttle', function () {
    it('throttle 节流，多次调用则在一定时间间隔内执行且最多执行一次', function (done) {
      let num = 0
      let interval = null
      let throttled = hanutil.throttle(() => {
        num++
        return true
      },200)
      interval = setInterval(() => {
        throttled()
      }, 20)
      setTimeout(() => {
        assert(num === Math.floor(805 / 200))
        done()
        clearInterval(interval)
      }, 805)
    })
  })
})
