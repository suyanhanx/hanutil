/**
 * 设置一个cookie
 * 默认过期时间 一天
 * @param {string} name
 * @param {*} value
 * @param {string} time
 */
const setCookie = (name, value, time) => {
  if (time) {
    let secStr = getSecond(time)
    let exp = new Date()
    exp.setTime(exp.getTime() + secStr * 1)
    document.cookie = name + '=' + value + ';expires=' + exp.toGMTString()
  } else {
    document.cookie = name + '=' + value
  }
}

/**
 * 由表达式设置返回毫秒
 * @param {string} str
 * @returns {number}
 */
const getSecond = str => {
  let pattern = /^(\d+)(s|d|h)?/

  let params = str.match(pattern)
  if (params === null) {
    params = '1d'.match(pattern)
  }

  let count = params[1]
  let unit = params[2]

  switch (unit) {
    case undefined:
    case 's' : return count * 1000
    case 'h' : return count * 60 * 60 * 1000
    case 'd' : return count * 24 * 60 * 60 * 1000
  }
}

export default setCookie
