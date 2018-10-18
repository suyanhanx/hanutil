/**
 * 设置一个阀值，在阀值内，把触发的事件合并成一次执行；当到达阀值，必定执行一次事件
 * @param action 方法
 * @param delay 延迟
 * @returns {Function}
 */
export default function throttle(action, delay) {
  let statTime = 0

  return function () {
    let currTime = +new Date()

    if (currTime - statTime > delay) {
      action.apply(this, arguments)
      statTime = currTime
    }
  }
}
