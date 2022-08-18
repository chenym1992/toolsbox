<script setup>
import {onMounted,ref} from 'vue'
import { isFullScreen,isFullScreenEnabled, enterFullscreen, exitFullscreen, hasClass,addClass,toggleClass,removeClass } from '../../src'
const bool1 = isFullScreen()
const bool2 = isFullScreenEnabled()
const bool3 = ref(false)
const click1 = ()=>{enterFullscreen()}
const click2 = ()=>{exitFullscreen()}
const click3 = ()=>{addClass('blue',document.querySelector('#demo02'))}
const click4 = ()=>{removeClass('blue',document.querySelector('#demo02'))}
const click5 = ()=>{toggleClass('orange',document.querySelector('#demo03'))}
onMounted(() => {
  bool3.value =  hasClass('red', document.querySelector('#demo01'))
})
</script>

# dom

## FullScreen

### isFullScreen 是否在全屏状态

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L7)

```ts
import { isFullScreen } from 'fe-toolsbox'
isFullScreen()
```

<div class="demo">
  {{!!bool1}}
</div>

### isFullScreenEnabled 是否支持全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L20)

```ts
import { isFullScreenEnabled } from 'fe-toolsbox'
isFullScreenEnabled()
```

<div class="demo">
  {{!!bool2}}
</div>

### enterFullscreen 进入全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L35)

```ts
import { enterFullscreen } from 'fe-toolsbox'
enterFullscreen()
```

<div class="demo">
  <button @click="click1">进入全屏</button>
</div>

### exitFullscreen 退出全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L53)

```ts
import { exitFullscreen } from 'fe-toolsbox'
exitFullscreen()
```

<div class="demo">
  <button @click="click2">退出全屏</button>
</div>

## class

### hasClass 是否存在指定 class

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L12)

```ts
import { hasClass } from 'fe-toolsbox'
hasClass('red', document.querySelector('#demo01'))
```

```html
<div id="demo01" class="red">颜色区域</div>
```

<style>
  .red{
    color:red;
  }
</style>
<div class="demo">
  <div id="demo01" class="red">颜色区域</div>
  {{bool3}}
</div>

### addClass 和 removeClass

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L28)

```ts
import { addClass } from 'fe-toolsbox'
addClass('blue', document.querySelector('#demo02'))
```
```html
<div id="demo02">颜色区域</div>
```

<style>
  .blue{
    color:blue;
  }
</style>
<div class="demo">
  <div id="demo02" >颜色区域</div>
  <button @click="click3">添加blue类</button>
  <button @click="click4">删除blue类</button>
</div>

### toggleClass 切换 class

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L48)

```ts
import { toggleClass } from 'fe-toolsbox'
toggleClass('orange', document.querySelector('#demo03'))
```
```html
<div id="demo03">颜色区域</div>
```

<style>
  .orange{
    color:orange;
  }
</style>
<div class="demo">
  <div id="demo03">颜色区域</div>
  <button @click="click5">切换orange</button>
</div>
