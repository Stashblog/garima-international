import { categories } from 'data'
import s from './styles.module.scss'
import images from 'images'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  const handleCategoryClick = category => {
    navigate(`/category/${category}`)
  }
  return (
    <div className={s.masonry}>
      {categories.map((image, index) => (
        <div
          className={s.masonryItem}
          key={index}
          title={image.category}
          onClick={() => handleCategoryClick(image.category)}
        >
          <img src={images[image.src]} alt={image.alt} className={s.masonryImage} />
        </div>
      ))}
    </div>
  )
}
export default Categories
