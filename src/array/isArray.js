/**
 * 判断是否是数组
 */
export default function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
