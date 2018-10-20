/**
 * 验证税号
 * 15或者17或者18或者20位字母、数字组成
 * @param obj
 * @returns {Boolean}
 */
const checkTax = (obj) => /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(obj)

export default checkTax
