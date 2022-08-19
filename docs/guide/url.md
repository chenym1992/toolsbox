<script setup>
import {getUrlParams,stringifyQueryString} from 'fe-toolsbox'
</script>

# url

## getUrlParams 获取 Url 完整参数或指定字段参数

[source](https://github.com/chenym1992/toolsbox/blob/main/src/url/getUrlParams.ts)

```ts
import { getUrlParams } from 'fe-toolsbox'
getUrlParams('https://example.com?a=1&b=1')
// => {a:'1',b:'1'}
getUrlParams('https://example.com?a=1&b=1', 'a')
// => '1'
getUrlParams('https://example.com?a=1&b=1&a=2')
// => {a:['1','2'],b:'1'}
getUrlParams('https://example.com?a=1&b=1&a=2', 'a')
// => ['1','2']
```

<div class="demo">
  <div>{{getUrlParams('https://example.com?a=1&b=1')}}</div>
  <div>{{getUrlParams('https://example.com?a=1&b=1','a')}}</div>
  <div>{{getUrlParams('https://example.com?a=1&b=1&a=2')}}</div>
  <div>{{getUrlParams('https://example.com?a=1&b=1&a=2','a')}}</div>
</div>

## stringifyQueryString 简单对象序列化

[source](https://github.com/chenym1992/toolsbox/blob/main/src/url/stringifyQueryString.ts)

```ts
import { stringifyQueryString } from 'fe-toolsbox'
stringifyQueryString({a:[1,2,3],b:{a:3},c:4})
```
<div class="demo">
  <div>{{stringifyQueryString({a:[1,2,3],b:{a:3},c:4})}}</div>
</div>
