import React from 'react'
import s from './styles.module.scss'
import images from 'images'
import { Link } from 'react-router-dom'
const newProducts = [
  {
    id: 1,
    title: 'Showpiece',
    description: 'showpiece item for table and glass cases ',
    imageUrl: images.Type
  },
  {
    id: 2,
    title: 'Showpiece',
    description: 'showpiece item for table and glass cases ',
    imageUrl: images.Type1
  },
  {
    id: 3,
    title: 'Showpiece',
    description: 'showpiece item for table and glass cases ',
    imageUrl: images.Type2
  },
  {
    id: 4,
    title: 'Showpiece',
    description: 'showpiece item for table and glass cases ',
    imageUrl: images.Type3
  }
]

const NewArrivals = () => {
  return (
    <section className={s.newArrivalsSection}>
      <h2 className={s.title}>New Arrivals</h2>
      <div className={s.newArrivalsGrid}>
        {newProducts.map(product => (
          <div key={product.id} className={s.productCard}>
            <div className={s.imageWrapper}>
              <img src={product.imageUrl} alt={product.name} className={s.productImage} />
            </div>
            <h3 className={s.productTitle}>{product.name}</h3>
            <Link to={`/product/${product.id}`}>
              <button className={s.buyButton}>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
