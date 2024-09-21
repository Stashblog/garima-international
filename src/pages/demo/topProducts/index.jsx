import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { Products } from 'components'

export default function Main() {
  const products = [
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro1,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '-50%'
    },
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro2,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '-50%'
    },
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro3,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '-50%'
    },
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro4,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '50%'
    },
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro5,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '50%'
    },
    {
      title: 'Antiques',
      subtitle: 'Brass Surahi',
      imageSrc: images.pro6,
      priceCurrent: 'Rp 30,000',
      priceOld: 'Rp 60,000',
      discount: '50%'
    }
  ]
  return (
    <>
      <div className={s.topProducts + ' indent'}>
        <div className={s.title}>Top Products</div>
        <div className={s.products}>
          <div className={s.cardGrid}>
            {products.map(product => (
              <Products
                {...product}
                key={product.id} // Use product.id as the key
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
