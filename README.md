# hanutil

[![npm](https://img.shields.io/npm/v/hanutil.svg)](https://www.npmjs.com/package/hanutil)
![Build Status](https://img.shields.io/travis/suyanhanx/hanutil/master.svg)
[![Coverage Status](https://img.shields.io/coveralls/github/suyanhanx/hanutil/develop.svg)](https://coveralls.io/github/suyanhanx/hanutil?branch=develop)
![LICENSE MIT](https://img.shields.io/npm/l/hanutil.svg)
![LGTM](https://img.shields.io/lgtm/grade/javascript/g/suyanhanx/hanutil.svg)

## 前端公共方法库

为了节约花在项目编写时寻找常用方法的时间，开设此库，方便使用。

## 引入方式
可以完整引入整个包方便取用，也可以单独引入一个方法
``` javascript
// 只引入部分方法('hautil/<方法名>')
const isArray = require('hautil/isArray')
```

## APIs
具体函数签名可以参考[index.d.ts][index]

### Array

#### [arrayEqual: &emsp; 判断两个数组是否相同][arrayEqual]
#### [convertClass: &emsp; 将 String, Object, Array 转成 Array][convertClass]
#### [isArray: &emsp; 判断是否是一个数组][isArray]

### Cookie

#### [getCookie: &emsp; 获取cookie][getCookie]
#### [removeCookie: &emsp; 移除cookie][removeCookie]
#### [setCookie: &emsp; 设置cookie][setCookie]

### Function

#### [debounce: &emsp; 判断两个数组是否相同][debounce]
#### [throttle: &emsp; 判断两个数组是否相同][throttle]

### Object

#### [deepAssign: &emsp; 深度合并][deepAssign]
#### [deepClone: &emsp; 深克隆][deepClone]
#### [getProperty: &emsp; 由路径获取属性值][getProperty]
#### [isDef: &emsp; 判断是否已定义][isDef]
#### [isEmptyObject: &emsp; 判断是否是空对象][isEmptyObject]

### Validate

#### [isCarNumber: &emsp; 车牌号验证][isCarNumber]
#### [isEmail: &emsp; 电子邮箱email验证][isEmail]
#### [isIdCard: &emsp; 身份证号码验证][isIdCard]
#### [isPhoneNum: &emsp; 手机号验证][isPhoneNum]
#### [isTaxNumber: &emsp; 税号验证][isTaxNumber]

[index]:https://github.com/suyanhanx/hanutil/blob/master/index.d.ts

[arrayEqual]:https://github.com/suyanhanx/hanutil/blob/master/src/array/arrayEqual.js
[convertClass]:https://github.com/suyanhanx/hanutil/blob/master/src/array/convertClass.js
[isArray]:https://github.com/suyanhanx/hanutil/blob/master/src/array/isArray.js

[getCookie]:https://github.com/suyanhanx/hanutil/blob/master/src/cookie/getCookie.js
[removeCookie]:https://github.com/suyanhanx/hanutil/blob/master/src/cookie/removeCookie.js
[setCookie]:https://github.com/suyanhanx/hanutil/blob/master/src/cookie/setCookie.js

[debounce]:https://github.com/suyanhanx/hanutil/blob/master/src/function/debounce.js
[throttle]:https://github.com/suyanhanx/hanutil/blob/master/src/function/throttle.js

[deepAssign]:https://github.com/suyanhanx/hanutil/blob/master/src/object/deepAssign.js
[deepClone]:https://github.com/suyanhanx/hanutil/blob/master/src/object/deepClone.js
[getProperty]:https://github.com/suyanhanx/hanutil/blob/master/src/object/getProperty.js
[isDef]:https://github.com/suyanhanx/hanutil/blob/master/src/object/isDef.js
[isEmptyObject]:https://github.com/suyanhanx/hanutil/blob/master/src/object/isEmptyObject.js

[isCarNumber]:https://github.com/suyanhanx/hanutil/blob/master/src/validate/isCarNumber.js
[isEmail]:https://github.com/suyanhanx/hanutil/blob/master/src/validate/isEmail.js
[isIdCard]:https://github.com/suyanhanx/hanutil/blob/master/src/validate/isIdCard.js
[isPhoneNum]:https://github.com/suyanhanx/hanutil/blob/master/src/validate/isPhoneNum.js
[isTaxNumber]:https://github.com/suyanhanx/hanutil/blob/master/src/validate/isTaxNumber.js


