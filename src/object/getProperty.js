/**
 * 获取复杂对象对应路径下的属性值
 * @param {*} object 对象
 * @param {*} path 路径
 */

import isDef from './isDef'

const get = (object, path) => {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

export default get
