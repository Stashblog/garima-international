import s from './styles.module.scss'
const Categories = ({ images }) => {
  return (
    <div className={s.masonry}>
      {images.map((image, index) => (
        <div className={s.masonryItem} key={index} onClick={image.onClick}>
          {' '}
          {}
          <img src={image.src} alt={image.alt} className={s.masonryImage} />
        </div>
      ))}
    </div>
  )
}
export default Categories
