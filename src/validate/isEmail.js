/**
 * 判断是否是邮箱
 * @param {string} value
 */
const isEmail = (value) => /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)

export default isEmail
