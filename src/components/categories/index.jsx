import s from './styles.module.scss'

const Catagories = ( { images } )=> {
  return (
    <div className={s.masonry }>
    {images.map((image, index) => (
      <div className={s.masonryItem} key={index}>
        <img src={image.src} alt={image.alt} className={s.masonryImage} />
      </div>
    ))}
  </div>
  )
}

export default Catagories