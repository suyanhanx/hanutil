/**
 * 判断是否是手机号
 * @param {*} value 
 */

const isPhoneNum = function (value) {
  return /^1[0-9][0-9]{9}$/.test(String(value))
}

export default isPhoneNum
