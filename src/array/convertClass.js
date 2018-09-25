/**
 * 将 String, Object, Array 转成 Array
 */
export default function convertClass(classes) {
    let newClasses = []
    if (!classes) return newClasses
    if (classes instanceof Array) {
        newClasses = newClasses.concat(classes)
    } else if (classes instanceof Object) {
        for (const name in classes) {
            if (classes[name]) newClasses.push(name)
        }
    } else {
        newClasses = newClasses.concat(classes.split(' '))
    }
    return newClasses
}