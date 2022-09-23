<script setup>
import {ref, onMounted} from 'vue'
import { byteToString,stringToByte } from 'fe-toolsbox'
const stringBuffer = ref()
onMounted(()=>{
  stringBuffer.value = stringToByte('hello world')
})
</script>

# byteToString 字节数组转字符串

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/byteToString.ts)

```ts
import { byteToString } from 'fe-toolsbox'
const byte = [104, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100] 
//紧示意，需要ArrayBuffer数据
byteToString(byte)
```

<div class="demo">
  {{byteToString(stringBuffer)}}
</div>
