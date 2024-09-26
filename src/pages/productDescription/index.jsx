import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { ImageGrid } from 'components'
import { SendQueryForm } from 'components'
import { products } from 'data'
import { head } from 'helpers'

const ProductDescription = ({ product }) => {
  const { id } = useParams()
  const [isModalVisible, setModalVisible] = useState(false)

  const currentProduct = product || products.find(p => p.id === parseInt(id)) || products[0]

  const relatedProducts = products.filter(p => p.id !== currentProduct.id)

  useEffect(() => {
    head({ title: currentProduct.title + ' | Global Crafts Innovation' })
  }, [currentProduct])

  return (
    <div className={s.productPage + ' indent'}>
      <div className={s.productDetails}>
        <div className={s.imageSection}>
          <ImageGrid
            images={[
              { url: images[currentProduct.imageUrl], alt: currentProduct.title },
              ...currentProduct.additionalImages.map(img => ({ url: images[img], alt: 'Additional Image' }))
            ]}
          />
        </div>

        <div className={s.metaSection}>
          <h1>{currentProduct.title}</h1>
          <div className={s.tags}>
            {currentProduct.tags.map((tag, index) => (
              <span key={index} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={s.description}>{currentProduct.description}</p>

          <div className={s.productMeta}>
            <p>
              <strong>Category:</strong> {currentProduct.category}
            </p>
            {!!currentProduct.quantity && (
              <p>
                <strong>Quantity:</strong> {currentProduct.quantity}
              </p>
            )}
            <p>
              <strong>Product listed on:</strong> {currentProduct.listedOn}
            </p>
          </div>
          <button className={s.queryButton} onClick={() => setModalVisible(true)}>
            Send Query
          </button>
        </div>
      </div>
      <SendQueryForm isVisible={isModalVisible} onClose={() => setModalVisible(false)} />

      <div className={s.additionalSections}>
        <div className={s.section}>
          <h2>Detailed Description</h2>
          <p>{currentProduct.detailedDescription}</p>
        </div>

        <div className={s.section}>
          <h2>Product Specifications</h2>
          <p>{currentProduct.additionalInfo}</p>
        </div>

        <div className={s.section}>
          <h2>Related Products</h2>
          <div className={s.relatedProductsGallery}>
            {relatedProducts.map((relatedProduct, index) => (
              <div className={s.relatedProductCard} key={index}>
                <img
                  src={images[relatedProduct.imageUrl]}
                  alt={relatedProduct.title}
                  className={s.relatedProductImage}
                />
                <div className={s.viewButton}>
                  <Link to={`/product/${relatedProduct.id}`} target='_blank'>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
