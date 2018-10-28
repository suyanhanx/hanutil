/**
 * 删除一个cookie
 * @param {string} name
 */
import getCookie from './getCookie'

const removeCookie = name => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
  }
}

export default removeCookie
