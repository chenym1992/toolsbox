<script setup>
  import { sum,average,uniq } from 'fe-toolsbox'
  const array = [1, 2, 3, 4, 5]
</script>

# array 数组

## sum 数组求和

[source](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L10)

```ts
import { sum } from 'fe-toolsbox'
const array = [1, 2, 3, 4, 5]
sum(array)
```

::: info 输出
{{sum(array)}}
:::

## average 数组求平均数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L21)

```ts
import { average } from 'fe-toolsbox'
const array = [1, 2, 3, 4, 5]
average(array)
```

::: info 输出
{{average(array)}}
:::

## uniq 数组去重

[source](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L34)

```ts
import { uniq } from 'fe-toolsbox'
const array = [1, 2, 2, 3, 3, 4, 5]
uniq(array)
```
::: info 输出
{{uniq([1, 2, 2, 3, 3, 4, 5])}}
:::
