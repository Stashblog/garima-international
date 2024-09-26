import s from './styles.module.scss'
import images from 'images'
import { Link } from 'react-router-dom'
import { products } from 'data'
import { useEffect } from 'react'
import { head } from 'helpers'

const Product = () => {
  useEffect(() => {
    head({ title: 'Products' })
  }, [])

  return (
    <div className={s.productPage + ' indent'}>
      <h1>Our Products</h1>
      <div className={s.productGrid}>
        {products.map(product => (
          <div key={product.id} className={s.productCard}>
            <img src={images[product.imageUrl]} alt={product.title} />
            <div className={s.productInfo}>
              <h2>{product.title}</h2>
              {/* <p>{product.description}</p> */}
            </div>
            <div className={s.overlay}>
              <Link to={`/product/${product.id}`}>
                <button className={s.queryButton}>View Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
