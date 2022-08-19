<script setup>
import {ref} from 'vue'
import { isIphoneNumber,isTelNumber,isIdCard,isValidIdCard,isEmail,isUrl,isEnglish,isChinese,isNumberPlate,isBase64,isBankCardNumber,isStrongPwd,checkPwdStrength } from 'fe-toolsbox'
const pwd = ref('')
</script>

# string 字符串格式判断

## isIphoneNumber 宽松判断国内手机号

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L15)

```ts
import { isIphoneNumber } from 'fe-toolsbox'
isIphoneNumber('18888888888')
isIphoneNumber('+8618888888888')
isIphoneNumber('008618888888888')
```

<div class="demo">
  <div >{{isIphoneNumber('18888888888')}} </div>
  <div >{{isIphoneNumber('+8618888888888')}} </div>
  <div >{{isIphoneNumber('008618888888888')}} </div>
</div>

## isTelNumber 判断座机号码（带分机号码）

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L32)

```ts
import { isTelNumber } from 'fe-toolsbox'
isTelNumber('0711-98765431')
isTelNumber('0711-98765431-12')
```

<div class="demo">
  <div >{{isTelNumber('0711-98765431')}} </div>
  <div >{{isTelNumber('0711-98765431-12')}} </div>
</div>

## isIdCard 判断身份证号

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L51)

```ts
import { isIdCard } from 'fe-toolsbox'
isIdCard('432424194509186543')
isIdCard('43242419450918654X')
```

<div class="demo">
  <div >{{isIdCard('432424194509186543')}} </div>
  <div >{{isIdCard('43242419450918654X')}} </div>
</div>

## isValidIdCard 判断身份证是否有效

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L64)

```ts
import { isValidIdCard } from 'fe-toolsbox'
isValidIdCard('432424194509186543')
isValidIdCard('43242419450918654X')
```

<div class="demo">
  <div >{{isValidIdCard('432424194509186543')}} </div>
  <div >{{isValidIdCard('43242419450918654X')}} </div>
</div>

## isEmail 判断邮箱格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L154)

```ts
import { isEmail } from 'fe-toolsbox'
isEmail('test@example.com')
```

<div class="demo">
  <div >{{isEmail('test@example.com')}} </div>
</div>

## isUrl 判断 Url 格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L167)

```ts
import { isUrl } from 'fe-toolsbox'
isUrl('https://www.example.com')
isUrl('http://www.example.com')
isUrl('ftp://www.example.com')
```

<div class="demo">
  <div >{{isUrl('https://www.example.com')}} </div>
  <div >{{isUrl('http://www.example.com')}} </div>
  <div >{{isUrl('ftp://www.example.com')}} </div>
</div>

## isEnglish 判断英文格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L178)

```ts
import { isEnglish } from 'fe-toolsbox'
isEnglish('hello')
```

<div class="demo">
  <div >{{isEnglish('hello')}} </div>
</div>

## isChinese 判断中文格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L187)

```ts
import { isChinese } from 'fe-toolsbox'
isChinese('中国人')
```

<div class="demo">
  <div >{{isChinese('中国人')}} </div>
</div>

## isNumberPlate 判断车牌号格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L1202)

```ts
import { isNumberPlate } from 'fe-toolsbox' 
isNumberPlate('粤B99999') 
isNumberPlate('粤BA99999') 
```

<div class="demo">
  <div >{{isNumberPlate('粤B99999')}} </div>
  <div >{{isNumberPlate('粤BA99999')}} </div>
</div>

## isBase64 判断 base64 格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L1217)

```ts
import { isBase64 } from 'fe-toolsbox'
isBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA')
```

<div class="demo">
  <div >{{isBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA')}} </div>
</div>

## isBankCardNumber 判断银行卡号(包含对公对私)格式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L1228)

```ts
import { isBankCardNumber } from 'fe-toolsbox'
isBankCardNumber('622222222222222222')
```

<div class="demo">
  <div >{{isBankCardNumber('622222222222222222')}} </div>
</div>

## isStrongPwd 强密码格式校验

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L1238)

```ts
import { isStrongPwd } from 'fe-toolsbox'
isStrongPwd('622222222222222222')
isStrongPwd('1@aA666')
```

<div class="demo">
  <div>是否是强密码：<span >{{isStrongPwd('622222222222222222')}} </span></div>
  <div>是否是强密码：<span >{{isStrongPwd('1@aA666')}} </span></div>
</div>

## checkPwdStrength 检测密码强度

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L1261)

```ts
import { checkPwdStrength } from 'fe-toolsbox'
```
```vue-html
<div class="demo">
  <div>密码强度：<span >{{checkPwdStrength(pwd)}} </span></div>
  <div><input type="text" v-model="pwd" placeholder="请输入密码"></div>
</div>
```

<div class="demo">
  <div>密码强度：<span >{{checkPwdStrength(pwd)}} </span></div>
  <div><input type="text" v-model="pwd" placeholder="请输入密码"></div>
</div>

