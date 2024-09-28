import s from './styles.module.scss'
import images from 'images'
import { Link } from 'react-router-dom'
import { products } from 'data'

const NewArrivals = () => {
  return (
    <section className={s.newArrivalsSection}>
      <h2 className={s.title}>New Arrivals</h2>
      <div className={s.newArrivalsGrid + ' indent'}>
        {products.map(
          (product, i) =>
            i >= products.length - 4 && (
              <div key={product.id} className={s.productCard}>
                <div className={s.imageWrapper}>
                  <img src={images[product.imageUrl]} alt={product.name} className={s.productImage} />
                </div>

                <Link to={`/product/${product.id}`}>
                  <button className={s.buyButton}>View Product</button>
                </Link>
              </div>
            )
        )}
      </div>
    </section>
  )
}
export default NewArrivals
