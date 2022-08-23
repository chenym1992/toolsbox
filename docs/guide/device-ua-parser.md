<script setup>
  import {ref,onMounted} from 'vue'
  import {UAParser} from 'fe-toolsbox'
  const parser = ref()
  onMounted(() => {
    parser.value = new UAParser()
  })
</script>

# UAParser userAgent 解析器

## UAParser 初始化解析器

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L36)

```ts
import { UAParser } from 'fe-toolsbox'
const parser = new UAParser()
```

## getBrowser 获取浏览器信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L56)

```ts
parser.getBrowser()
```

<div class="demo">
{{parser?.getBrowser()}}
</div>

## getCPU 获取 CPU 信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L64)

```ts
parser.getCPU()
```

<div class="demo">
{{parser?.getCPU()}}
</div>

## getDevice 获取设备信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L70)

```ts
parser.getDevice()
```

<div class="demo">
{{parser?.getDevice()}}
</div>

## getEngine 获取 Engine 信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L78)

```ts
parser.getEngine()
```

<div class="demo">
{{parser?.getEngine()}}
</div>

## getOS 获取 OS 信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L85)

```ts
parser.getOS()
```

<div class="demo">
{{parser?.getOS()}}
</div>

## getUA 获取 UA 信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L92)

```ts
parser.getUA()
```

<div class="demo">
{{parser?.getUA()}}
</div>

## setUA 设置 UA 信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L95)

```ts
parser.setUA()
```

## getResult 获取全部信息

[source](https://github.com/chenym1992/toolsbox/blob/main/src/device/uaParser.ts#L98)

```ts
parser.getResult()
```

<div class="demo">
{{parser?.getResult()}}
</div>
