import React, { useState } from 'react'
import s from './styles.module.scss'

const ImageGrid = ({ images }) => {
  const [expandedImg, setExpandedImg] = useState(images[0]?.url || '')
  const [imgText, setImgText] = useState(images[0]?.alt || '')

  const myFunction = img => {
    setExpandedImg(img.url)
    setImgText(img.alt)
  }

  return (
    <div>
      {/* The expanding image container */}
      <div className={s.container}>
        <img src={expandedImg} style={{ width: '100%' }} alt={imgText} />
        {/* <div className={s.imgtext}>{imgText}</div> */}
      </div>

      {/* The grid: four columns */}
      <div className={s.row}>
        {images.map((image, index) => (
          <div className={s.column} key={index}>
            <img src={image.url} alt={image.alt} onClick={() => myFunction(image)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrid
