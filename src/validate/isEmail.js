/**
 * 判断是否是邮箱
 * @param {*} str 
 */
const isEmail = function (str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}

export default isEmail
