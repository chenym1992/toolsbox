# dom

## FullScreen
### isFullScreen 是否在全屏状态

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L7)

```ts
import { isFullScreen } from 'fe-toolsbox'
isFullScreen()
```

### isFullScreenEnabled 是否支持全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L20)

```ts
import { isFullScreenEnabled } from 'fe-toolsbox'
isFullScreenEnabled()
```

### enterFullscreen 进入全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L35)

```ts
import { enterFullscreen } from 'fe-toolsbox'
enterFullscreen()
```
### exitFullscreen 退出全屏

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/index.ts#L53)

```ts
import { exitFullscreen } from 'fe-toolsbox'
exitFullscreen()
```
## class

### hasClass 是否存在指定 class

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L12)
 
```ts
import { hasClass } from 'fe-toolsbox'
hasClass('test',document.body)
```
### addClass 添加 class
[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L28)

```ts
import { addClass } from 'fe-toolsbox'
addClass('test',document.body)
```

### toggleClass 切换 class

[source](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L48)

```ts
import { toggleClass } from 'fe-toolsbox'
toggleClass('test',document.body)
```
