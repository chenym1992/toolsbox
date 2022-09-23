/**
 * imageURLToImageInstance
 * @param url
 * @returns
 */
export function imageURLToImageInstance(url: string) {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.src = url
    img.onerror = reject
  })
}

/**
 * imageToCanvasContext
 * @param image
 * @returns
 */
export function imageToCanvasContext(image: CanvasImageSource) {
  const canvas = imageToCanvas(image)
  return canvas.getContext('2d')
}

/**
 * imageToCanvas
 * @param image
 * @returns
 */
export function imageToCanvas(image: CanvasImageSource) {
  const canvas = document.createElement('canvas')
  canvas.width = image.width as number
  canvas.height = image.height as number

  const ctx = canvas.getContext('2d')!

  ctx.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    canvas.width,
    canvas.height
  )
  return canvas
}

/**
 * bufferToCanvasAndImageData
 * @param buffer
 * @param width
 * @param height
 * @returns
 */
export function bufferToCanvasAndImageData(
  buffer: Iterable<number>,
  width: number,
  height: number
) {
  const canvas = document.createElement('canvas')

  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')!

  const imageData = ctx.createImageData(width, height)

  imageData.data.set(new Uint8ClampedArray(buffer))

  ctx.putImageData(imageData, 0, 0)

  return { canvas, imageData }
}

/**
 * rotatePixelData
 * @param pixelData
 * @returns
 */
export function rotatePixelData(pixelData: string | any[]) {
  const newPixelData = new Uint8ClampedArray(pixelData.length)
  let increasingIndex = 3
  for (let i = pixelData.length - 1; i >= 0; i -= 4) {
    newPixelData[increasingIndex] = pixelData[i]
    newPixelData[increasingIndex - 1] = pixelData[i - 1]
    newPixelData[increasingIndex - 2] = pixelData[i - 2]
    newPixelData[increasingIndex - 3] = pixelData[i - 3]

    increasingIndex += 4
  }
  return newPixelData
}
