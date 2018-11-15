const person = {
  name: 'Tom',
  age: 27,
  car: {
    brand: 'TESLA',
    model: 'ModelX'
  }
}

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

  describe('#deepClone', function () {
    it('deepClone two object, reference should be different but content is same', function () {
      let personClone = hanutil.deepClone(person)
      assert.equal(personClone === person, false)
      assert.deepEqual(personClone, person)
      assert.deepStrictEqual(personClone, person)
    })
    it('deepClone normal return same', function () {
      assert.equal(hanutil.deepClone(12), 12)
    })
    it('deepClone an Array with Object should the same', function () {
      let personArray = [person]
      let personClone = hanutil.deepClone(personArray)
      assert.equal(personClone === personArray, false)
      assert.deepEqual(personClone, personArray)
      assert.deepStrictEqual(personClone, personArray)
    })
  })

  describe('#isDef', function () {
    it('undefined should return false', function () {
      assert.equal(hanutil.isDef(undefined), false)
    })
    it('null should return false', function () {
      assert.equal(hanutil.isDef(null), false)
    })
    it('1 should return true', function () {
      assert(hanutil.isDef(1))
    })
  })

  describe('#getProperty', function() {
    it('getProperty(person, "car.model") should return "ModelX"', function () {
      assert.deepEqual(hanutil.getProperty(person, 'car.model'), 'ModelX')
    })
    it('try to get a undefined property return empty', function () {
      assert.equal(hanutil.getProperty(person,'car.engine'), '')
    })
  })


  describe('#isEmptyObject', function () {
    it('isEmptyObject({}) should return true', function () {
      assert(hanutil.isEmptyObject({}))
    })
    it('isEmptyObject([]) should return false', function () {
      assert.equal(hanutil.isEmptyObject([]), false)
    })
    it('isEmptyObject({a:1}) should return false', function () {
      assert.equal(hanutil.isEmptyObject({a:1}), false)
    })
    it('isEmptyObject("") should return false', function () {
      assert.equal(hanutil.isEmptyObject(''), false)
    })
  })
})
