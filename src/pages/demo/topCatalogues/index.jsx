import React from 'react'
import { Catalogues } from 'components'
import s from './styles.module.scss'
import images from 'images'

const cataloguesData = [
  { id: 1, imageSrc: images.Cat, title: 'Home Decor' },
  { id: 2, imageSrc: images.Cat2, title: 'Showpiece Pairs' },
  { id: 3, imageSrc: images.Cat3, title: 'Antiques' },
  { id: 4, imageSrc: images.Cat, title: 'Home Decor' },
  { id: 5, imageSrc: images.Cat2, title: 'Showpiece Pairs' },
  { id: 6, imageSrc: images.Cat3, title: 'Antiques' }
]

export default function Main() {
  return (
    <div className={s.topCatalogues + ' indent'}>
      <div className={s.title}>Top Catalogues</div>
      <div className={s.cardGrid}>
        {cataloguesData.map((catalogue, index) => (
          <Catalogues
            key={catalogue.id}
            imageSrc={catalogue.imageSrc}
            title={catalogue.title}
            id={catalogue.id} // Pass the ID to the Catalogues component
          />
        ))}
      </div>
    </div>
  )
}
