<script setup>
import { isEvenOrOdd,compareFloatsReasonably,clamp } from 'fe-toolsbox'
</script>

# helper

## isEvenOrOdd 判断奇偶性

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/helper.ts#L6)

```ts
import { isEvenOrOdd } from 'fe-toolsbox'
isEvenOrOdd(0)
isEvenOrOdd(1)
isEvenOrOdd(2)
```

<div class="demo">
  {{isEvenOrOdd(0)}}
  {{isEvenOrOdd(1)}}
  {{isEvenOrOdd(2)}}
</div>

## compareFloatsReasonably 合理范围内数据比较

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/helper.ts#L17)

```ts
import { compareFloatsReasonably } from 'fe-toolsbox'
// default float 0.001
compareFloatsReasonably(1,0.9999)
compareFloatsReasonably(1,1.1)
compareFloatsReasonably(1,1.1,0.11)
```

<div class="demo">
  {{compareFloatsReasonably(1,0.9999)}}
  {{compareFloatsReasonably(1,1.1)}}
  {{compareFloatsReasonably(1,1.1,0.11)}}
</div>

## clamp 夹子函数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/helper.ts#L32)

```ts
import { clamp } from 'fe-toolsbox'
// default float 0.001
clamp(1,2,4)
clamp(2,1,4)
clamp(3,3,4)
```

<div class="demo">
  {{clamp(1,2,4)}}
  {{clamp(2,1,4)}}
  {{clamp(3,3,4)}}
</div>
