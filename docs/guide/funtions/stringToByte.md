<script setup>
import {ref, onMounted} from 'vue'
import { stringToByte } from 'fe-toolsbox'
</script>

# stringToByte 字符串转字节数组

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/stringToByte.ts)

```ts
import { stringToByte } from 'fe-toolsbox'
const string = 'hello, world'
stringToByte(string)
```

<div class="demo">
  {{stringToByte('hello, world')}}
</div>
