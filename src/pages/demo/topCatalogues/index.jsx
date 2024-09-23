import { Catalogues } from 'components'
import s from './styles.module.scss'
import images from 'images'
import { catalogues } from 'data'

export default function Main() {
  return (
    <div className={s.topCatalogues + ' indent'}>
      <div className={s.title}>Top Catalogues</div>
      <div className={s.cardGrid}>
        {catalogues.map(catalogue => (
          <Catalogues
            key={catalogue.id}
            imageSrc={images[catalogue.imageSrc]}
            title={catalogue.title}
            id={catalogue.id}
          />
        ))}
      </div>
    </div>
  )
}
