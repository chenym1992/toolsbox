<script setup>
import { hexToRgb,hexToRgba,rgbToHex,rgbaToHex } from 'fe-toolsbox'
</script>

# convertColors 转换颜色格式

## hexToRgb 颜色 hex 转 Rgb

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L12)

```ts
import { hexToRgb } from 'fe-toolsbox'
hexToRgb('#000000')
```

<div class="demo">
  {{hexToRgb('#000000')}}
</div>

## hexToRgba 颜色 hex 转 Rgba

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L33)

```ts
import { hexToRgba } from 'fe-toolsbox'
hexToRgba('#000000')
```

<div class="demo">
  {{hexToRgba('#000000')}}
</div>

## rgbToHex 颜色 rgb 转 hex

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L59)

```ts
import { rgbToHex } from 'fe-toolsbox'
rgbToHex('rgb(255,255,124)')
rgbToHex('rgb(255,255,124)', false)
```

<div class="demo">
  {{rgbToHex('rgb(255,255,124)')}}
  {{rgbToHex('rgb(255,255,124)',false)}}
</div>

## rgbaToHex 颜色 rgba 转 hex

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L83)

```ts
import { rgbaToHex } from 'fe-toolsbox'
rgbaToHex('rgba(255,255,124,0.1)')
rgbaToHex('rgba(255,255,124,0.2)', false)
```

<div class="demo">
  {{rgbaToHex('rgba(255,255,124,0.1)')}}
  {{rgbaToHex('rgba(255,255,124,0.2)',false)}}
</div>