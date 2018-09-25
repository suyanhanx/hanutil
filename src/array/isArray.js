/**
 * 判断是否是数组
 */
export default function isArray (o) {
    let b = Object.prototype.toString.call(o) === '[object Array]'
    return b
}