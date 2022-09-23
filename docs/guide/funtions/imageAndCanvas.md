<script setup>
import { imageURLToImageInstance,imageToCanvasContext,imageToCanvas,bufferToCanvasAndImageData,rotatePixelData } from 'fe-toolsbox'
</script>

# imageAndCanvas 图像及 canvas 相关

## imageURLToImageInstance

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/imageAndCanvas.ts#L6)

```ts
import { imageURLToImageInstance } from 'fe-toolsbox'
imageURLToImageInstance('logo.png')
```

## imageToCanvasContext

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/imageAndCanvas.ts#L22)

```ts
import { imageToCanvasContext } from 'fe-toolsbox'
imageToCanvasContext(document.getElementById(demoimg))
```

```html
<img id="demoimg" src="logo.png" />
```

## imageToCanvas

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/imageAndCanvas.ts#L32)

```ts
import { imageToCanvas } from 'fe-toolsbox'
imageToCanvas(document.getElementById(demoimg))
```

```html
<img id="demoimg" src="logo.png" />
```

## bufferToCanvasAndImageData

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/imageAndCanvas.ts#L60)

```ts
import { bufferToCanvasAndImageData } from 'fe-toolsbox'
const w = 100,h = 100
const buffer = new ArrayBuffer(w * h)
bufferToCanvasAndImageData(buffer, w, h)
```

## rotatePixelData

[source](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/imageAndCanvas.ts#L86)

```ts
import { rotatePixelData } from 'fe-toolsbox'
const PixelData = []
rotatePixelData(PixelData)
```

