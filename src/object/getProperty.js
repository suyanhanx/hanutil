export default function get(object, path) {
    const keys = path.split('.')
    let result = object

    keys.forEach(key => {
        result = isDef(result[key]) ? result[key] : ''
    })

    return result
}