<script setup>
  import { arrayToTree } from 'fe-toolsbox'
  const array1 = [
    { id: 1, name: '部门1', pid: 0 , sid: 1,  psid: 0 },
    { id: 2, name: '部门2', pid: 1 , sid: 2,  psid: 1 },
    { id: 3, name: '部门3', pid: 1 , sid: 3,  psid: 1 },
    { id: 4, name: '部门4', pid: 3 , sid: 4,  psid: 3 },
    { id: 5, name: '部门5', pid: 4 , sid: 5,  psid: 4 }
  ]
</script>

# arrayToTree 扁平数据结构转 Tree

[source](https://github.com/chenym1992/toolsbox/blob/main/src/array/arrayToTree.ts#L7)

```ts
import { arrayToTree } from 'fe-toolsbox'
const array = [
  { id: 1, name: '部门1', pid: 0 , sid: 1,  psid: 0 },
  { id: 2, name: '部门2', pid: 1 , sid: 2,  psid: 1 },
  { id: 3, name: '部门3', pid: 1 , sid: 3,  psid: 1 },
  { id: 4, name: '部门4', pid: 3 , sid: 4,  psid: 3 },
  { id: 5, name: '部门5', pid: 4 , sid: 5,  psid: 4 }
]
arrayToTree(array)
arrayToTree(array,{ id: 'sid', pid: 'psid', children: 'child' })
```

<div class="demo">
<div>{{arrayToTree(array1)}}</div>
<div>{{arrayToTree(array1,{ id: 'sid', pid: 'psid', children: 'child' })}}</div>
</div>
