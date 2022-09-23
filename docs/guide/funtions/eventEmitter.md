<script setup>
import {ref, onMounted} from 'vue'
import {EventEmitter} from 'fe-toolsbox'
const $bus = new EventEmitter()

$bus.once('click', (res) =>{
  alert(`1: ${res}`)
})

$bus.on({
  click: (res) => {
    alert(`2: ${res}`)
  }
})

const click1 = ()=>{
  $bus.emit('click','123')
}
</script>

# EventEmitter 事件总线

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/eventEmitter.ts)

```ts
import { EventEmitter } from 'fe-toolsbox'
const $bus = new EventEmitter()
$bus.once('click', res => {
  alert(`1: ${res}`)
})
$bus.on({
  click: res => {
    alert(`2: ${res}`)
  }
})
const click1 = () => {
  $bus.emit('click', '123')
}
```

```vue-html
<div class="demo">
  <button @click="click1">点击查看效果</button>
</div>
```

<div class="demo">
  <button @click="click1">点击查看效果</button>
</div>
