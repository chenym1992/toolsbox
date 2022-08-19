<script setup>
import {makeDurationPretty,dateFormat} from 'fe-toolsbox'
</script>

# time

## makeDurationPretty 美化时长显示

[source](https://github.com/chenym1992/toolsbox/blob/main/src/time/makeDurationPretty.ts)

```ts
import { makeDurationPretty } from 'fe-toolsbox'
makeDurationPretty(121)
```

<div class="demo">
  <div>{{makeDurationPretty(121)}}</div>
</div>

## dateFormat 时间格式化

[source](https://github.com/chenym1992/toolsbox/blob/main/src/time/dateFormat.ts)

```ts
import { dateFormat } from 'fe-toolsbox'
dateFormat()
dateFormat(Date.now(), 'HH:mm:ss')
```

<div class="demo">
  <div>{{dateFormat()}}</div>
  <div>{{dateFormat(Date.now(),'HH:mm:ss')}}</div>
</div>
