


export const resizeImage = function(url, maxWidth = 600, maxHeight = 600){
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')
    const ctx = canvas.getContext('2d')

    img.src = url
    ctx.drawImage(img, 0, 0)

    canvas.width = maxWidth
    canvas.height = maxHeight

    ctx.drawImage(img, 0, 0, maxWidth, maxHeight)

    return canvas.toDataURL('image/jpeg')
}