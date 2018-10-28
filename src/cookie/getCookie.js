/**
 * 获取一个cookie
 * @param {string} name
 * @returns {*}
 */
const getCookie = name => {
  let strCookie = document.cookie
  let arr = strCookie.split(';')
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i].split('=')
    if (t[0].trim() === name) {
      return t[1]
    }
  }
  return null
}

export default getCookie
