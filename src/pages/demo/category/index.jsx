import s from './styles.module.scss'
import images from 'images'
import { Categories } from 'components'

export default function Main()  {
  const pics = [
    { src: images.Type, alt: 'Image 1 description' },
    { src: images.Type1, alt: 'Image 2 description' },
    { src: images.Type2, alt: 'Image 3 description' },
    { src: images.Type3, alt: 'Image 4 description' },
    { src: images.Type4, alt: 'Image 5 description' },
    { src: images.Type5, alt: 'Image 5 description' },
    { src: images.Type6, alt: 'Image 5 description' },
    { src: images.Type7, alt: 'Image 5 description' },
    { src: images.Type8, alt: 'Image 5 description' },
    { src: images.Type9, alt: 'Image 5 description' },
    { src: images.Type10, alt: 'Image 5 description' }
  ]

  return (
    
      <div className={s.categories + ' indent'}>
        <div className={s.title}>Categories</div>
        <Categories images={pics} />
      </div>
    
  )
}


