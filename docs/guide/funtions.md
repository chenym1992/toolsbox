<script setup>
import {ref, onMounted} from 'vue'
import { byteToString,stringToByte,throttle,debounce,EventEmitter,hexToRgb,hexToRgba,rgbToHex,rgbaToHex, randomUID,randomNumber,isHttps,isHttp,isOnline, deepCopy } from 'fe-toolsbox'
const count = ref(0)
const isHttpsBool = ref(false)
const isHttpBool = ref(false)
const isOnlineBool = ref(false)
const uuid = ref()
const copyFrom = {
  a: 1,
  b: 2,
  c: 3,
  d: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  f: { name: 'WebKit', version: '537.36' }
}
onMounted(()=>{
  isHttpsBool.value = isHttps()
  isHttpBool.value = isHttp()
  isOnlineBool.value = isOnline()
  uuid.value = randomUID()
})
const throttleFn = throttle(() => {
  count.value++
}, 1000)

const debounceFn = debounce(() => {
  count.value++
}, 1000)

const $bus = new EventEmitter()

$bus.once('click', (res) =>{
  alert(`1: ${res}`)
})

$bus.on({
  click: (res) => {
    alert(`2: ${res}`)
  }
})

const click1 = ()=>{
  $bus.emit('click','123')
}
</script>

# funtions

## deepCopy 深拷贝

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/deepCopy.ts)

```ts
import { deepCopy } from 'fe-toolsbox'
const copyFrom = {
  a: 1,
  b: 2,
  c: 3,
  d: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  f: { name: 'WebKit', version: '537.36' }
}
deepCopy({}, copyFrom)
```

<div class="demo">
  {{deepCopy({}, copyFrom)}}
</div>

## byteToString 字节数组转字符串

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/byteToString.ts)

```ts
import { byteToString } from 'fe-toolsbox'
const byte = [104, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100]
byteToString(byte)
```

<div class="demo">
  {{byteToString([ 104, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100 ])}}
</div>

## stringToByte 字符串转字节数组

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/stringToByte.ts)

```ts
import { stringToByte } from 'fe-toolsbox'
const string = 'hello, world'
stringToByte(string)
```

<div class="demo">
  {{stringToByte('hello, world')}}
</div>

## throttle 节流函数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/throttle.ts) 节流函数

```ts
import { throttle } from 'fe-toolsbox'
const count = ref(0)
const throttleFn = throttle(() => {
  count.value++
}, 1000)
```

<style>
.count{
  margin-right:10px;
}
</style>
<div class="demo">
  <span class="count">{{count}} </span>
  <button @click="throttleFn">点击查看效果</button>
</div>

## debounce 防抖函数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/debounce.ts)

```ts
import { debounce } from 'fe-toolsbox'
const count = ref(0)
const debounceFn = debounce(() => {
  count.value++
}, 1000)
```

<div class="demo">
  <span class="count">{{count}} </span>
  <button @click="debounceFn">点击查看效果</button>
</div>

## EventEmitter 事件总线

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/eventEmitter.ts)

```ts
import { EventEmitter } from 'fe-toolsbox'
const $bus = new EventEmitter()
$bus.once('click', res => {
  alert(`1: ${res}`)
})
$bus.on({
  click: res => {
    alert(`2: ${res}`)
  }
})
const click1 = () => {
  $bus.emit('click', '123')
}
```

```vue-html
<div class="demo">
  <button @click="click1">点击查看效果</button>
</div>
```

<div class="demo">
  <button @click="click1">点击查看效果</button>
</div>

## convertColors 转换颜色格式

### hexToRgb 颜色 hex 转 Rgb

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L12)

```ts
import { hexToRgb } from 'fe-toolsbox'
hexToRgb('#000000')
```

<div class="demo">
  {{hexToRgb('#000000')}}
</div>

### hexToRgba 颜色 hex 转 Rgba

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L33)

```ts
import { hexToRgba } from 'fe-toolsbox'
hexToRgba('#000000')
```

<div class="demo">
  {{hexToRgba('#000000')}}
</div>

### rgbToHex 颜色 rgb 转 hex

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L59)

```ts
import { rgbToHex } from 'fe-toolsbox'
rgbToHex('rgb(255,255,124)')
rgbToHex('rgb(255,255,124)', false)
```

<div class="demo">
  {{rgbToHex('rgb(255,255,124)')}}
  {{rgbToHex('rgb(255,255,124)',false)}}
</div>

### rgbaToHex 颜色 rgba 转 hex

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L83)

```ts
import { rgbaToHex } from 'fe-toolsbox'
rgbaToHex('rgba(255,255,124,0.1)')
rgbaToHex('rgba(255,255,124,0.2)', false)
```

<div class="demo">
  {{rgbaToHex('rgba(255,255,124,0.1)')}}
  {{rgbaToHex('rgba(255,255,124,0.2)',false)}}
</div>

## random 随机

### randomNumber 生成随机数,默认 0-100

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L9)

```ts
import { randomNumber } from 'fe-toolsbox'
randomNumber()
randomNumber(0, 1)
```

<div class="demo">
  {{randomNumber()}}  
  {{randomNumber(0,1)}}
</div>

### randomUID 随机生成一个 UID

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L18)

```ts
import { randomUID } from 'fe-toolsbox'
randomUID()
```

<div class="demo">
  {{uuid}}
</div>

## network 网络

### isHttps 判断 https

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L6)

```ts
import { isHttps } from 'fe-toolsbox'
isHttps()
```

<div class="demo">
  {{isHttpsBool}}
</div>

### isHttp 判断 http

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L16)

```ts
import { isHttp } from 'fe-toolsbox'
isHttp()
```

<div class="demo">
  {{isHttpBool}}
</div>

### isOnline 判断网络状态

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L25)

```ts
import { isOnline } from 'fe-toolsbox'
isOnline()
```

<div class="demo">
  {{isOnlineBool}}
</div>
