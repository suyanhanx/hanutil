/**
 * 验证税号
 * 15或者17或者18或者20位字母、数字组成
 * @param {string} value
 * @returns {Boolean}
 */
const checkTax = value => /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(value)

export default checkTax
