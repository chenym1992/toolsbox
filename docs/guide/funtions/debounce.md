<script setup>
import {ref, onMounted} from 'vue'
import { byteToString,stringToByte,throttle,debounce} from 'fe-toolsbox'
const count = ref(0)
const debounceFn = debounce(() => {
  count.value++
}, 1000)

</script>

# debounce 防抖函数

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
