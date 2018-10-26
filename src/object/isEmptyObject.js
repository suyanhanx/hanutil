/**
 * 判断`obj`是否是空对象
 * 注意，只是空对象才会通过检测，空数组、空字符串等不算
 * @param  {Object} obj
 * @return {Boolean}
 */
const isEmptyObject = obj => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

export default isEmptyObject
