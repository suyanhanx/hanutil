/**
 * 判断一个对象是否为空或者是未定义
 * @param {*} value 
 */

const isDef = function (value) {
  return value !== undefined && value !== null
}

export default isDef
