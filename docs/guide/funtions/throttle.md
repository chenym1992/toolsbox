<script setup>
import {ref, onMounted} from 'vue'
import { throttle } from 'fe-toolsbox'
const count = ref(0)
const throttleFn = throttle(() => {
  count.value++
}, 1000)


</script>

# throttle 节流函数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/throttle.ts)

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
