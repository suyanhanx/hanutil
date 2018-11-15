/**
 * 车牌号码校验
 * 包含挂车等特殊车牌
 * @param carNum
 * @returns {boolean}
 */
const isCarNumber = (carNum) => {
  let pattern = /([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})/
  if (carNum) {
    return pattern.test(carNum)
  } else {
    return false
  }
}

export default isCarNumber
