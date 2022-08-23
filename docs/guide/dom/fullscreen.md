<script setup>
import {onMounted,ref} from 'vue'
import { isFullScreen,isFullScreenEnabled, enterFullscreen, exitFullscreen } from 'fe-toolsbox'
const bool1 = ref(false)
const bool2 = ref(false)
const click1 = ()=>{enterFullscreen()}
const click2 = ()=>{exitFullscreen()}
onMounted(() => {
  bool1.value  = isFullScreen()
  bool2.value  = isFullScreenEnabled()
})
</script>

# FullScreen

## isFullScreen 是否在全屏状态

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L7)

```ts
import { isFullScreen } from 'fe-toolsbox'
isFullScreen()
```

<div class="demo">
  {{!!bool1}}
</div>

## isFullScreenEnabled 是否支持全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L20)

```ts
import { isFullScreenEnabled } from 'fe-toolsbox'
isFullScreenEnabled()
```

<div class="demo">
  {{!!bool2}}
</div>

## enterFullscreen 进入全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L35)

```ts
import { enterFullscreen } from 'fe-toolsbox'
enterFullscreen()
```

<div class="demo">
  <button @click="click1">进入全屏</button>
</div>

## exitFullscreen 退出全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L53)

```ts
import { exitFullscreen } from 'fe-toolsbox'
exitFullscreen()
```

<div class="demo">
  <button @click="click2">退出全屏</button>
</div>
