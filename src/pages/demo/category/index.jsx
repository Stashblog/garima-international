import { useNavigate } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { Categories } from 'components'
export default function Main() {
  const navigate = useNavigate()
  const pics = [
    { src: images.Type, alt: 'Image 1 description', category: 'Home Decor' },
    { src: images.Type1, alt: 'Image 2 description', category: 'Home Decor' },
    { src: images.Type2, alt: 'Image 3 description', category: 'Furniture' },
    { src: images.Type3, alt: 'Image 4 description', category: 'Home Decor' },
    { src: images.Type4, alt: 'Image 5 description', category: 'Kitchen' },
    { src: images.Type5, alt: 'Image 6 description', category: 'Furniture' },
    { src: images.Type6, alt: 'Image 7 description', category: 'Home Decor' },
    { src: images.Type7, alt: 'Image 8 description', category: 'Lighting' },
    { src: images.Type8, alt: 'Image 9 description', category: 'Decor' },
    { src: images.Type9, alt: 'Image 10 description', category: 'Wall Art' },
    { src: images.Type10, alt: 'Image 11 description', category: 'Home Decor' }
  ]
  const handleCategoryClick = category => {
    navigate(`/category/${category}`)
  }
  return (
    <div className={s.categories + ' indent'}>
      <div className={s.title}>Categories</div>
      <Categories
        images={pics.map(pic => ({
          ...pic,
          onClick: () => handleCategoryClick(pic.category)
        }))}
      />
    </div>
  )
}
