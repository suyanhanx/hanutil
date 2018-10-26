/*
将两个对象深度合并
*/


import isDef from './isDef'

const {
  hasOwnProperty
} = Object.prototype

function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function assignKey(to, from, key) {
  const val = from[key]

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val
  } else {
    to[key] = assign(Object(to[key]), from[key])
  }
}

export default function assign(to, ...args) {
  args.forEach(item => {
    for (const key in item) {
      if (hasOwnProperty.call(item, key)) {
        assignKey(to, item, key)
      }
    }
  })
  return to
}
