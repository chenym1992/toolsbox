<script setup>
import {ref, onMounted} from 'vue'
import {deepCopy } from 'fe-toolsbox'
const copyFrom = {
  a: 1,
  b: 2,
  c: 3,
  d: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  f: { name: 'WebKit', version: '537.36' }
}
const copied = ref()
onMounted(()=>{
  copied.value = deepCopy({}, copyFrom)
})
</script>

# deepCopy 深拷贝

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
  {{copied}}
</div>