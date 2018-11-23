/**
 * 判断是否是手机号
 * @param {string | number} value
 */

const isPhoneNum = value => /^(\+?0?86\-?)?1[3-8][0-9]{9}$/.test(String(value))

export default isPhoneNum
