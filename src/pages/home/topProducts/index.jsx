import { products } from 'data'
import s from './styles.module.scss'
import images from 'images'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className={s.productPage + ' indent'}>
      <h1>Top Products</h1>
      <div className={s.productGrid}>
        {products.map(
          (product, i) =>
            i < 6 && (
              <div key={product.id} className={s.productCard}>
                <div className={s.image}>
                  <img src={images[product.imageUrl]} alt={product.title} />
                </div>
                <div className={s.productInfo}>
                  <h2>{product.title}</h2>
                </div>
                <div className={s.overlay}>
                  <Link to={`/product/${product.id}`}>
                    <button className={s.queryButton}>View Product</button>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}
