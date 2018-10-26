/**
 * 深度克隆一个对象
 */

import deepAssign from './deepAssign'

const deepClone = obj => {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item))
  } else if (typeof obj === 'object') {
    return deepAssign({}, obj)
  }
  return obj
}

export default deepClone
