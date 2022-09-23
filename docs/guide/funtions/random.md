<script setup>
import {ref, onMounted} from 'vue'
import {  randomUID,randomNumber } from 'fe-toolsbox'
const uuid = ref()

onMounted(()=>{
  uuid.value = randomUID()
})

</script>

# random 随机

## randomNumber 生成随机数,默认 0-100

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

## randomUID 随机生成一个 UID

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L18)

```ts
import { randomUID } from 'fe-toolsbox'
randomUID()
```

<div class="demo">
  {{uuid}}
</div>
