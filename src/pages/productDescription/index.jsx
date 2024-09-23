import { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { ImageGrid } from 'components'
import { SendQueryForm } from 'components'
import { products } from 'data'

// Assuming the component is receiving `product` prop
const ProductDescription = ({ product }) => {
  const { id } = useParams() // Get the product id from the route
  const [isModalVisible, setModalVisible] = useState(false)

  // Find the current product by ID
  const currentProduct = product || products.find(p => p.id === parseInt(id)) || products[0] // Use passed product prop or fallback to mockProducts

  return (
    <div className={s.productPage + ' indent'}>
      <div className={s.productDetails}>
        {/* Left column: Product Image */}
        <div className={s.imageSection}>
          <ImageGrid
            images={[
              { url: images[currentProduct.imageUrl], alt: currentProduct.title },
              ...currentProduct.additionalImages.map(img => ({ url: images[img], alt: 'Additional Image' }))
            ]}
          />
        </div>

        {/* Right column: Product Information */}
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
            <p>
              <strong>Quantity:</strong> {currentProduct.quantity}
            </p>
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

      {/* Bottom Section */}
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
          <div className={s.imageGallery}>
            {currentProduct.additionalImages.map((image, index) => (
              <img key={index} src={images[image]} alt={`Additional ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
