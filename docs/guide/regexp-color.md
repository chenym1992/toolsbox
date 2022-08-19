<script setup>
import { isColor,isHexColor,isRgbColor,isRgbaColor } from 'fe-toolsbox'
</script>

# color 颜色格式判断

## isColor 判断是否是颜色表达式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L61)

```ts
import {isColor} from 'fe-toolsbox'
isColor('#AAA')
isColor('#AAACCC')
isColor('rgb(0,0,0)')
isColor('rgba(0,0,0,0.1)')
```
<div class="demo">
  <div >{{isColor('#AAA')}} </div>
  <div >{{isColor('#AAACCC')}} </div>
  <div >{{isColor('rgb(0,0,0)')}} </div>
  <div >{{isColor('rgba(0,0,0,0.1)')}} </div>
</div>

## isHexColor 判断 hex 颜色表达式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L16)

```ts
import {isHexColor} from 'fe-toolsbox'
isHexColor('#AAA')
isHexColor('rgb(0,0,0)')
isHexColor('rgba(0,0,0,0.1)')
```
<div class="demo">
  <div >{{isHexColor('#AAA')}} </div>
  <div >{{isHexColor('rgb(0,0,0)')}} </div>
  <div >{{isHexColor('rgba(0,0,0,0.1)')}} </div>
</div>

## isRgbColor 判断 RGB 颜色表达式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L31)

```ts
import {isRgbColor} from 'fe-toolsbox'
isRgbColor('#AAA')
isRgbColor('rgb(0,0,0)')
isRgbColor('rgba(0,0,0,0.1)')
```
<div class="demo">
  <div >{{isRgbColor('#AAA')}} </div>
  <div >{{isRgbColor('rgb(0,0,0)')}} </div>
  <div >{{isRgbColor('rgba(0,0,0,0.1)')}} </div>
</div>

## isRgbaColor 判断 RGBA 颜色表达式

[source](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L48)

```ts
import {isRgbaColor} from 'fe-toolsbox'
isRgbaColor('#AAA')
isRgbaColor('rgb(0,0,0)')
isRgbaColor('rgba(0,0,0,0.1)')
```
<div class="demo">
  <div >{{isRgbaColor('#AAA')}} </div>
  <div >{{isRgbaColor('rgb(0,0,0)')}} </div>
  <div >{{isRgbaColor('rgba(0,0,0,0.1)')}} </div>
</div>