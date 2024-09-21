import s from './styles.module.scss'
import images from 'images'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = [
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
    },
    {
      id: 5,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type4
    },
    {
      id: 6,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type5
    },
    {
      id: 7,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type6
    },
    {
      id: 8,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type7
    },
    {
      id: 9,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type8
    },
    {
      id: 10,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type9
    },
    {
      id: 11,
      title: 'Showpiece',
      description: 'showpiece item for table and glass cases ',
      imageUrl: images.Type10
    }
  ]

  return (
    <div className={s.productPage + ' indent'}>
      <h1>Our Products</h1>
      <div className={s.productGrid}>
        {products.map(product => (
          <div key={product.id} className={s.productCard}>
            <img src={product.imageUrl} alt={product.title} />
            <div className={s.productInfo}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
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
