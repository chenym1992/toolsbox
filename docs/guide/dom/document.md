<script setup>
import {ref} from 'vue'
import { createDom,findDom } from 'fe-toolsbox'
const findDomValue = ref()
const handleCreateDom = ()=>{
  const html = createDom(
    'div',
    '<ul><li>1</li><li>2</li><li>3</li></ul>',
    { id: 'ul-div' },
    'ul-div'
  )
  findDom(document,'#demo-container').appendChild(html)
}
const handleCreateDom1 = ()=>{
  findDomValue.value = findDom(document,'#demo-container1')
}
</script>

# document

## createDom 创建 dom

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L73)

```ts
import { createDom } from 'fe-toolsbox'
const html = createDom(
  'div',
  '<ul><li>1</li><li>2</li><li>3</li></ul>',
  { id: 'ul-div' },
  'ul-div'
)
```

<div class="demo" id="demo-container">
  <button type="button" @click="handleCreateDom">CreateDom</button>
</div>

## findDom 查找 dom

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L97)

```ts
import { findDom } from 'fe-toolsbox'
findDom(document,'#demo-container1')
```
```vue-html
<div class="demo" id="demo-container1">
  <button type="button" @click="handleCreateDom">findDom</button>
</div>
```

<div class="demo" id="demo-container1">
  <button type="button" @click="handleCreateDom1">findDom</button>
  {{findDomValue}}
</div>
