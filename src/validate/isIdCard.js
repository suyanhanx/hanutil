/**
 * 判断是否为身份证号
 * @param  {String} value
 * @return {Boolean}
 * 源自 https://juejin.im/post/5aa8d89af265da23866f9669
 */

const checkCode = val => {
  let p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  let code = val.substring(17)
  if (p.test(val)) {
    let sum = 0
    for (let i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
  }
  return false
}
let checkDate = val => {
  let pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
  if (pattern.test(val)) {
    let year = val.substring(0, 4)
    let month = val.substring(4, 6)
    let date = val.substring(6, 8)
    let date2 = new Date(year + "-" + month + "-" + date)
    if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
      return true
    }
  }
  return false
}
let checkProv = val => {
  let pattern = /^[1-9][0-9]/
  let provs = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门"
  };
  if (pattern.test(val)) {
    if (provs[val]) {
      return true
    }
  }
  return false
}

const isIdCard = val => {
  if (checkCode(val)) {
    let date = val.substring(6, 14)
    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        return true
      }
    }
  }
  return false
}

export default isIdCard
