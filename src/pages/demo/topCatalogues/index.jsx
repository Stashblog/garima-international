import { Catalogues } from 'components'
import s from './styles.module.scss'
import images from 'images'

const cataloguesData = [
  { imageSrc: images.Cat, title: 'Home Decor' },
  { imageSrc: images.Cat2, title: 'Showpiece Pairs' },
  { imageSrc: images.Cat3, title: 'Antiques' },
  { imageSrc: images.Cat, title: 'Home Decor' },
  { imageSrc: images.Cat2, title: 'Showpiece Pairs' },
  { imageSrc: images.Cat3, title: 'Antiques' }
]

export default function Main() {
  return (
    <div className={s.topCatalogues + ' indent'}>
      <div className={s.title}>Top Catalogues</div>
      <div className={s.cardGrid}>
        {cataloguesData.map((catalogue, index) => (
          <Catalogues key={index} imageSrc={catalogue.imageSrc} title={catalogue.title} />
        ))}
      </div>
    </div>
  )
}
