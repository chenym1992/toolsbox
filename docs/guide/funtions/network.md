<script setup>
import {ref, onMounted} from 'vue'
import { isHttps,isHttp,isOnline } from 'fe-toolsbox'
const isHttpsBool = ref(false)
const isHttpBool = ref(false)
const isOnlineBool = ref(false)
onMounted(()=>{
  isHttpsBool.value = isHttps()
  isHttpBool.value = isHttp()
  isOnlineBool.value = isOnline()
})
</script>

# network 网络

## isHttps 判断 https

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L6)

```ts
import { isHttps } from 'fe-toolsbox'
isHttps()
```

<div class="demo">
  {{isHttpsBool}}
</div>

## isHttp 判断 http

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L16)

```ts
import { isHttp } from 'fe-toolsbox'
isHttp()
```

<div class="demo">
  {{isHttpBool}}
</div>

## isOnline 判断网络状态

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L25)

```ts
import { isOnline } from 'fe-toolsbox'
isOnline()
```

<div class="demo">
  {{isOnlineBool}}
</div>
