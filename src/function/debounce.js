/**
 * 阻止短时间内重复调用
 * @param func 方法
 * @param delay 延迟
 * @returns {Function}
 */
const debounce = (func, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export default debounce
